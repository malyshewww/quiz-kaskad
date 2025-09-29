<script setup>
import QuizPlanImageOne from "/images/quiz/quiz-plan-1@2x.png";
import QuizPlanImageTwo from "/images/quiz/quiz-plan-2@2x.png";

import QuestionBlock from "@/components/Quiz/QuestionBlock";

import { useQuizStore } from "@/store/quiz";

const quizStore = useQuizStore();

const quizPlanData = [
  {
    image: QuizPlanImageOne,
    title: "Европланировка",
    subTitle: "Кухня совмещена с гостиной",
  },
  {
    image: QuizPlanImageTwo,
    title: "Классический вариант",
    subTitle: "Отдельная кухня, изолированные комнаты",
  },
];
</script>

<template>
  <QuestionBlock>
    <template #title>Какое планировочное решение Вы предпочтете?</template>
    <template #text>Возможно выбрать один вариант ответа.</template>
    <template #actions>
      <div class="quiz-plan">
        <div v-for="(item, index) in quizPlanData" :key="index" class="quiz-plan__item">
          <input type="radio" name="plan" class="quiz-plan__input" :value="item.title" v-model="quizStore.selectedPlan" />
          <div class="quiz-plan__image image-ibg">
            <img :src="item.image" :alt="item.title" />
          </div>
          <div class="quiz-plan__content">
            <p class="quiz-plan__caption default-text default-text--m default-text--medium">{{ item.title }}</p>
            <p class="default-text default-text--s">{{ item.subTitle }}</p>
          </div>
        </div>
      </div>
    </template>
  </QuestionBlock>
</template>

<style lang="scss" scoped>
.quiz-plan {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 1180px;
  margin: 0 auto;
  @include media($md) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  // .quiz-plan__item
  &__item {
    min-height: 399px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid var(--stroke-primary);
    border-radius: 8px;
    padding: 30px 24px 24px;
    text-align: center;
    position: relative;
    transition: border-color var(--time);
    &:has(input:checked) {
      border-color: var(--text-default-accent);
      & .quiz-plan__caption {
        color: var(--text-default-accent);
      }
    }
    @include hover {
      border-color: var(--text-default-accent);
    }
    @include media($md) {
      min-height: 180px;
      padding: 20px;
    }
  }
  // .quiz-plan__input
  &__input {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    border: none;
    z-index: 2;
    outline: none;
    border-radius: 0;
    cursor: default;
    @include hover {
      cursor: pointer;
    }
    &:checked + .quiz-plan__label {
      border-color: var(--text-default-accent);
      & .quiz-plan__caption {
        color: var(--text-default-accent);
      }
    }
  }
  //   .quiz-plan__caption
  &__caption {
    transition: color var(--time);
  }
  // .quiz-plan__image
  &__image {
    width: 100%;
    height: 264px;
    margin: 0 auto;
    & :deep(img) {
      object-fit: contain;
    }
    @include media($md) {
      height: 100%;
    }
  }
  // .quiz-plan__content
  &__content {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}
</style>
