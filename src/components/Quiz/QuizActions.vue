<script setup>
import Button from "@/components/ui/buttons/Button.vue";
import ButtonBack from "@/components/ui/buttons/ButtonBack.vue";

import { useQuizStore } from "@/store/quiz";

const quizStore = useQuizStore();

const emit = defineEmits(["prev-step", "next-step", "open-popup"]);

const prevStep = () => {
  emit("prev-step");
};

const nextStep = () => {
  emit("next-step");
};

const openQuizResult = () => {
  emit("open-popup");
};
</script>

<template>
  <div class="quiz-actions">
    <ButtonBack :disabled="quizStore.currentStep === 1" @click="prevStep">Вернуться назад</ButtonBack>
    <Button
      v-if="quizStore.currentStep < quizStore.quizComponentsLength"
      type="button"
      type-class="secondary"
      :disabled="quizStore.isDisabledStepButton"
      @click="nextStep"
      >Следующий вопрос</Button
    >
    <Button
      v-if="quizStore.currentStep === quizStore.quizComponentsLength"
      type="button"
      type-class="primary"
      :disabled="quizStore.isDisabledStepButton"
      @click="openQuizResult"
      >Завершить опрос</Button
    >
  </div>
</template>

<style lang="scss" scoped>
.quiz-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: auto;
  @include media($lg) {
    position: sticky;
    bottom: 0;
    z-index: 5;
    padding: 24px 0px;
    background-color: var(--white);
    flex-direction: column-reverse;
  }
}
</style>
