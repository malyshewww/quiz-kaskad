<script setup>
import { useQuizStore } from "@/store/quiz";
const quizStore = useQuizStore();

// Вычисляемый процент прогресса
const progressPercentage = computed(() => {
  return (quizStore.currentStep / quizStore.quizComponentsLength) * 100;
});
</script>

<template>
  <div class="quiz-header">
    <div class="quiz-header__progress">
      <div class="quiz-header__progress-bar" :style="{ width: progressPercentage + '%' }"></div>
    </div>
    <div class="quiz-header__count default-text default-text--m">Вопрос {{ quizStore.currentStep }} из {{ quizStore.quizComponentsLength }}</div>
  </div>
</template>

<style lang="scss" scoped>
.quiz-header {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 6.122vh;
  @include media($md) {
    margin-bottom: 40px;
  }
  // .quiz-header__progress
  &__progress {
    border-radius: 29px;
    background-color: var(--bg-secondary);
    width: 100%;
    height: 3px;
    position: relative;
  }
  // .quiz-header__progress-bar
  &__progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 18px;
    height: 100%;
    background: var(--text-default-accent);
    transition: width var(--time);
  }
}
</style>
