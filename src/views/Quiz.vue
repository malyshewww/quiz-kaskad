<script setup>
import QuizHeader from "@/components/Quiz/QuizHeader.vue";
import QuizPlan from "@/components/Quiz/QuizPlan.vue";
import QuizType from "@/components/Quiz/QuizType.vue";
import QuizPayment from "@/components/Quiz/QuizPayment.vue";
import QuizAttributes from "@/components/Quiz/QuizAttributes.vue";
import QuizRooms from "@/components/Quiz/QuizRooms.vue";
import QuizActions from "@/components/Quiz/QuizActions.vue";
import QuizResult from "@/components/Quiz/QuizResult.vue";

import { useQuizStore } from "@/store/quiz";

const quizStore = useQuizStore();

const components = [QuizRooms, QuizPlan, QuizType, QuizPayment, QuizAttributes];

const activeComponent = computed(() => components[quizStore.currentStep - 1]);

const nextStep = () => {
  if (quizStore.currentStep < components.length) {
    quizStore.currentStep++;
  }
};

const prevStep = () => {
  if (quizStore.currentStep > 1) {
    quizStore.currentStep--;
  }
};

const quiz = reactive({
  roomTitle: { value: "" },
  rooms: { value: "" },
  plan: { value: "" },
  type: { value: "" },
  payments: { value: [] },
  attributes: { value: [] },
});

const formData = reactive({
  rooms_count: quizStore.selectedRoomTitle,
  studio: quizStore.selectedRooms,
  layout_solution: quizStore.selectedPlan,
  finishing_type: quizStore.selectedType,
  buy_option: quizStore.selectedPayment,
  comfort_attributes: quizStore.selectedAttributes,
  webform_id: "quiz",
})

const updateFormData = () => {
  formData.rooms_count = quizStore.selectedRoomTitle;
  formData.studio = quizStore.selectedRooms;
  formData.layout_solution = quizStore.selectedPlan;
  formData.finishing_type = quizStore.selectedType;
  formData.buy_option = quizStore.selectedPayment;
  formData.comfort_attributes = quizStore.selectedAttributes;
}

const openPopup = async () => {
  alert(
    `
    Комнаты - ${quiz.rooms.value},
    Планировка - ${quiz.plan.value},
    Тип отделки - ${quiz.type.value},
    Способ оплаты - ${quiz.payments.value},
    Атрибуты комфорта - ${quiz.attributes.value}
    `
  );
  quizStore.isOpenQuizResult = true;
  // try {
  //   const { response } = await usePostFormData(formData);
  //   if (response.ok) {
  //     quizStore.isOpenQuizResult = true;
  //   } else {
  //     errorSubmittedForm();
  //   }
  // } catch (error) {
  //   errorSubmittedForm();
  //   throw new Error("Ошибка:", error);
  // }
};


// const errorSubmittedForm = () => {
//   quizStore.isOpenQuizResult = true;
//   quizStore.isSubmittedSuccess = false;
// };

const updateRoomTitle = (title) => {
  quiz.roomTitle.value = title;
};

const updateRooms = (room) => {
  quiz.rooms.value = room;
};
const updatePlan = (plan) => {
  quiz.plan.value = plan;
};
const updateType = (type) => {
  quiz.type.value = type;
};
const updatePayment = (payment) => {
  quiz.payments.value = Array.isArray(payment) ? [...payment] : payment;
};
const updateAttributes = (attribute) => {
  quiz.attributes.value = Array.isArray(attribute) ? [...attribute] : attribute;
};

const checkStep = () => {
  const stepValidations = {
    1: () => quizStore.selectedRooms.length > 0,
    2: () => quizStore.selectedPlan.length > 0,
    3: () => quizStore.selectedType.length > 0,
    4: () => quizStore.selectedPayment.length > 0,
    5: () => quizStore.selectedAttributes.length > 0,
  };

  const isValid = stepValidations[quizStore.currentStep]?.() || false;
  quizStore.isDisabledStepButton = !isValid;
  // console.log(`step ${quizStore.currentStep}`, isValid);
  return isValid;
};

watchEffect(() => {
  updateRoomTitle(quizStore.selectedRoomTitle);
  updateRooms(quizStore.selectedRooms);
  updatePlan(quizStore.selectedPlan);
  updateType(quizStore.selectedType);
  updatePayment(quizStore.selectedPayment);
  updateAttributes(quizStore.selectedAttributes);
  checkStep();
  updateFormData();
  console.log("watch", quiz);
  console.log('formData', formData);
  
});

watch(
  () => quizStore.currentStep,
  () => {
    checkStep();
    scrollPageToTop();
  }
);

const { lockScroll, unlockScroll } = useScrollLock();

watch(
  () => quizStore.isOpenQuizResult,
  (val) => {
    if (val) {
      lockScroll();
    }
  }
);



const router = useRouter();

router.afterEach(() => {
  unlockScroll();
});

useHead({
  bodyAttrs: {
    class: "page--quiz",
  },
});
</script>

<template>
  <div class="quiz">
    <QuizHeader />
    <div class="quiz__body">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <component :is="activeComponent"></component>
        </keep-alive>
      </transition>
    </div>
    <QuizActions @prev-step="prevStep" @next-step="nextStep" @open-popup="openPopup" />
    <transition name="fade" mode="out-in">
      <QuizResult v-if="quizStore.isOpenQuizResult" />
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.quiz {
  height: 100%;
  min-height: 100%;
  max-width: $maxWidthContainer + px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  // .quiz__body
  &__body {
    flex: 1 1 auto;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
