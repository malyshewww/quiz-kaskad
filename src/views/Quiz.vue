<script setup>
import { useHead } from "@vueuse/head";

import QuestionBlock from "@/components/Quiz/QuestionBlock";
import QuizHeader from "@/components/Quiz/QuizHeader.vue";
import QuizPlan from "@/components/Quiz/QuizPlan.vue";
import QuizType from "@/components/Quiz/QuizType.vue";
import QuizPayment from "@/components/Quiz/QuizPayment.vue";
import QuizAttributes from "@/components/Quiz/QuizAttributes.vue";
import QuizRooms from "@/components/Quiz/QuizRooms.vue";
import QuizActions from "@/components/Quiz/QuizActions.vue";
import QuizResult from "@/components/Quiz/QuizResult.vue";

useHead({
  bodyAttrs: {
    class: "page--quiz",
  },
});
</script>

<template>
  <div class="quiz">
    <div class="container">
      <QuizHeader />
      <div class="quiz__body">
        <QuestionBlock>
          <template #title>Сколько комнат в квартире для вас актуально?</template>
          <template #text>Возможно выбрать один вариант ответа.</template>
          <template #actions>
            <QuizRooms />
          </template>
        </QuestionBlock>
        <QuestionBlock>
          <template #title>Какое планировочное решение Вы предпочтете?</template>
          <template #text>Возможно выбрать один вариант ответа.</template>
          <template #actions>
            <QuizPlan />
          </template>
        </QuestionBlock>
        <QuestionBlock>
          <template #title>Какой тип отделки Вы предпочтете?</template>
          <template #text>Возможно выбрать один вариант ответа.</template>
          <template #actions>
            <QuizType />
          </template>
        </QuestionBlock>
        <QuestionBlock>
          <template #title>Как вы планируете покупать квартиру?</template>
          <template #text>Возможно выбрать один или несколько вариантов ответов.</template>
          <template #actions>
            <QuizPayment />
          </template>
        </QuestionBlock>
        <QuestionBlock>
          <template #title>Какие атрибуты комфорта важны для Вас?</template>
          <template #text>Возможно выбрать один или несколько вариантов ответов.</template>
          <template #actions>
            <QuizAttributes />
          </template>
        </QuestionBlock>
      </div>
      <QuizActions />
    </div>
    <!-- <QuizResult /> -->
  </div>
</template>
