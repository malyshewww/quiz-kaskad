<script setup>
import InputCheckbox from "@/components/ui/form/InputCheckbox.vue";
import QuestionBlock from "@/components/Quiz/QuestionBlock.vue";

import { useQuizStore } from "@/store/quiz";

const quizStore = useQuizStore();

const quizAttributesData = [
  {
    title: "Мастер спальня",
    descr: "Санузел и гардеробная в спальне",
  },
  {
    title: "Благоустроенная территория",
    descr: "Детские площадки, зоны отдыха",
  },
  {
    title: "Размещение на 1 этаже коммерческих помещений",
    descr: "Магазин, аптека, кафе",
  },
  {
    title: "Система безопасности",
    descr: "Видеонаблюдение, закрытая территория",
  },
  {
    title: "Система очистки воды",
  },
  {
    title: "Просторный холл с дизайнерской отделкой",
  },
  {
    title: "Колясочные, велосипедные",
  },
  {
    title: "Подземный паркинг",
  },
  {
    title: "Кладовки",
  },
  {
    title: "Наличие лоджии/балкона",
  },
];

// Обработка чекбоксов атрибутов жилья
const handlePayment = (value) => {
  const index = quizStore.selectedAttributes.indexOf(value);
  if (index === -1) {
    quizStore.selectedAttributes.push(value);
  } else {
    quizStore.selectedAttributes.splice(index, 1);
  }
};
</script>

<template>
  <QuestionBlock>
    <template #title>Какие атрибуты комфорта важны для Вас?</template>
    <template #text>Возможно выбрать один или несколько вариантов ответов.</template>
    <template #actions>
      <div class="quiz-attributes">
        <InputCheckbox
          v-for="(item, index) in quizAttributesData"
          :key="index"
          :id="`comfort-${index + 1}`"
          name="comfort"
          :value="item.title"
          :is-descr="item.descr ? true : false"
          @update:model-value="handlePayment(item.title)"
        >
          <template #single>{{ item.title }}</template>
          <template v-if="item.descr" #descr>{{ item.descr }}</template>
        </InputCheckbox>
      </div>
    </template>
  </QuestionBlock>
</template>

<style lang="scss" scoped>
.quiz-attributes {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 1180px;
  margin: 0 auto;
  @include media($md) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
</style>
