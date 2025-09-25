<script setup></script>

<template>
  <div class="quiz-header">
    <div class="quiz-header__progress">
      <div class="quiz-header__progress-bar"></div>
    </div>
    <div class="quiz-header__count default-text default-text--m">Вопрос 1 из 5</div>
  </div>
</template>

<style lang="scss" scoped>
.quiz-header {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 60px;
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
    width: 30%;
    border-radius: 18px;
    height: 100%;
    background: var(--text-default-accent);
  }
  // .quiz-header__count
  &__count {
  }
}
</style>
