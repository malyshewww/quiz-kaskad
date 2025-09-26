<script setup>
import InputCheckbox from "@/components/ui/form/InputCheckbox.vue";
import QuestionBlock from "@/components/Quiz/QuestionBlock.vue";

import { useQuizStore } from "@/store/quiz";

const quizStore = useQuizStore();

const quizPaymentData = [
  {
    title: "Собственные средства (полная оплата)",
  },
  {
    title: "Ипотека",
  },
  {
    title: "Рассрочка",
  },
];

// Обработка чекбоксов способов оплаты
const handlePayment = (value) => {
  const index = quizStore.selectedPayment.indexOf(value);
  if (index === -1) {
    quizStore.selectedPayment.push(value);
  } else {
    quizStore.selectedPayment.splice(index, 1);
  }
};
</script>

<template>
  <QuestionBlock>
    <template #title>Как вы планируете покупать квартиру?</template>
    <template #text>Возможно выбрать один или несколько вариантов ответов.</template>
    <template #actions>
      <div class="quiz-payment">
        <InputCheckbox
          v-for="(item, index) in quizPaymentData"
          :key="index"
          :id="`payment-${index + 1}`"
          name="payment"
          :value="item.title"
          @update:model-value="handlePayment(item.title)"
        >
          <template #single>{{ item.title }}</template>
        </InputCheckbox>
      </div>
    </template>
  </QuestionBlock>
</template>

<style lang="scss" scoped>
.quiz-payment {
  display: grid;
  gap: 20px;
  max-width: 587px;
  margin: 0 auto;
  @include media($md) {
    gap: 12px;
  }
}
</style>
