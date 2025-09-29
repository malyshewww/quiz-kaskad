<script setup>
import QuizTypeImageOne from "/images/quiz/quiz-type-1@2x.jpg";
import QuizTypeImageTwo from "/images/quiz/quiz-type-2@2x.jpg";
import QuizTypeImageThree from "/images/quiz/quiz-type-3@2x.jpg";

import QuestionBlock from "@/components/Quiz/QuestionBlock";

import { useQuizStore } from "@/store/quiz";

const quizStore = useQuizStore();

const quizTypeData = [
  {
    image: QuizTypeImageOne,
    title: "Без отделки",
    subTitle: "Не переплачиваете за материалы и работы по отделке ",
  },
  {
    image: QuizTypeImageTwo,
    title: "Предчистовая отделка *White Box",
    subTitle: "Белые выровненные стены, стяжка пола, электропроводка, разводка отопления, счетчики",
  },
  {
    image: QuizTypeImageThree,
    title: "Отделка под ключ",
    subTitle: "Ремонт от застройщика уже включен в стоимость квартиры",
  },
];
</script>

<template>
  <QuestionBlock>
    <template #title>Какой тип отделки Вы предпочтете?</template>
    <template #text>Возможно выбрать один вариант ответа.</template>
    <template #actions>
      <div class="quiz-type">
        <div v-for="(item, index) in quizTypeData" :key="index" class="quiz-type__item">
          <input type="radio" name="type" class="quiz-type__input" :value="item.title" v-model="quizStore.selectedType" />
          <div class="quiz-type__image image-ibg">
            <img :src="item.image" :alt="item.title" />
          </div>
          <div class="quiz-type__content">
            <p class="quiz-type__caption default-text default-text--m default-text--m-medium">{{ item.title }}</p>
            <p class="quiz-type__text default-text default-text--s">{{ item.subTitle }}</p>
          </div>
        </div>
      </div>
    </template>
  </QuestionBlock>
</template>

<style lang="scss" scoped>
.quiz-type {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @include media($md) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  // .quiz-type__item
  &__item {
    display: flex;
    flex-direction: column;
    gap: 0;
    border: 1px solid var(--stroke-primary);
    border-radius: 8px;
    padding: 0;
    text-align: center;
    position: relative;
    height: 100%;
    transition: border-color var(--time);
    overflow: hidden;
    &:has(input:checked) {
      border-color: var(--text-default-accent);
      & .quiz-type__caption {
        color: var(--text-default-accent);
      }
    }
    @include hover {
      border-color: var(--text-default-accent);
    }
  }
  //   .quiz-type__label
  &__label {
  }
  // .quiz-type__input
  &__input {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    border: none;
    outline: none;
    border-radius: 0;
    z-index: 2;
    cursor: default;
    @include hover {
      cursor: pointer;
    }
  }
  //   .quiz-type__caption
  &__caption {
    transition: color var(--time);
  }
  // .quiz-type__text
  &__text {
    color: var(--text-gray);
  }
  // .quiz-type__image
  &__image {
    padding-bottom: math.div(317, 579) * 100%;
  }
  // .quiz-type__content
  &__content {
    padding: 20px 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}
</style>
