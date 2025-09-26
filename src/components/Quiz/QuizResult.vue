<script setup>
import QuizResultLogo from "/images/quiz-logo.svg";
import QuizResultBg from "/images/quiz/quiz-bg.png";
import QuizDefaultForm from "@/components/ui/form/QuizDefaultForm.vue";
</script>

<template>
  <div class="quiz-result">
    <div class="quiz-result__image">
      <img :src="QuizResultBg" alt="фоновое изображение" />
    </div>
    <div class="quiz-result__content">
      <div class="quiz-result__logo">
        <img :src="QuizResultLogo" alt="каскад" />
      </div>
      <QuizDefaultForm />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.quiz-result {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--white);
  @include media($lg) {
  }
  // .quiz-result__image
  &__image {
    position: absolute;
    top: 0;
    right: 0;
    width: 57.3%;
    height: 100%;
    z-index: -1;
    & :deep(img) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    @include media($lg) {
      display: none;
    }
  }
  // .quiz-result__content
  &__content {
    width: 50%;
    background-color: var(--white);
    height: 100%;
    padding: 60px 70px;
    padding-right: 8%;
    display: flex;
    flex-direction: column;
    gap: 80px;
    clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
    @include media($xl) {
      width: 60%;
      padding: 24px;
      padding-right: 80px;
      clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);
      gap: 40px;
    }
    @include media($lg) {
      width: 100%;
      clip-path: none;
      padding: 20px 16px;
      overflow-y: auto;
      @include no-scroll;
    }
  }
  // .quiz-result__logo
  &__logo {
    @include media($xl) {
      width: 200px;
      height: auto;
    }
  }
}
</style>
