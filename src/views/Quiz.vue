<script setup>
import { useHead } from "@vueuse/head";

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
  rooms: { value: "" },
  plan: { value: "" },
  type: { value: "" },
  payments: { value: [] },
  attributes: { value: [] },
});

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

watchEffect(() => {
  updateRooms(quizStore.selectedRooms);
  updatePlan(quizStore.selectedPlan);
  updateType(quizStore.selectedType);
  updatePayment(quizStore.selectedPayment);
  updateAttributes(quizStore.selectedAttributes);
  console.log("watch", quiz);
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
    <QuizActions @prev-step="prevStep" @next-step="nextStep" />
    <QuizResult v-if="quizStore.isOpenQuizResult" />
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
