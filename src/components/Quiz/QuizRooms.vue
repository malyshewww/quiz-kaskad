<script setup>
import InputRadio from "@/components/ui/form/InputRadio.vue";
import QuestionBlock from "@/components/Quiz/QuestionBlock";
import { useQuizStore } from "@/store/quiz";

const quizStore = useQuizStore();

const quizRoomsData = [
  {
    title: "Студия",
    areas: ["20- 25 кв.м²", "25- 30 кв.м²"],
    key: "studio",
  },
  {
    title: "Однокомнатная",
    areas: ["30- 35 кв.м²", "35- 42 кв.м²"],
    key: "one-room",
  },
  {
    title: "Двухкомнатная",
    areas: ["45- 55 кв.м²", "55- 65 кв.м²"],
    key: "two-room",
  },
  {
    title: "Трехкомнатная",
    areas: ["65-70 кв.м²", "70-85 кв.м²"],
    key: "three-room",
  },
];

const activeCard = ref(-1);

const openRoom = (index) => {
  // Если открыта та же карточка, закрываем ее
  if (activeCard.value === index) {
    activeCard.value = -1;
  } else {
    if (quizStore.selectedRooms.length > 0) {
      quizStore.selectedRooms = [];
    }
    // Открываем новую карточку и закрываем остальные
    activeCard.value = index;
  }
};

// Обработка радиокнопок площадей в комнатах
const handleRooms = (value) => {
  quizStore.selectedRooms = value;
};
</script>

<template>
  <QuestionBlock>
    <template #title>Сколько комнат в квартире для вас актуально?</template>
    <template #text>Возможно выбрать один вариант ответа.</template>
    <template #actions>
      <div class="quiz-rooms">
        <div
          v-for="(room, roomIndex) in quizRoomsData"
          :key="roomIndex"
          :class="['quiz-rooms__item', { 'is-active': activeCard === roomIndex }]"
          @click="openRoom(roomIndex)"
        >
          <div class="quiz-rooms__title default-text--m default-text--m-medium">{{ room.title }}</div>
          <div class="quiz-rooms__content" @click.stop>
            <div class="quiz-rooms__content-caption default-text default-text--xs">Выберите площадь</div>
            <div class="quiz-rooms__areas">
              <InputRadio
                v-for="(item, areaIndex) in room.areas"
                :key="areaIndex"
                :id="`${room.key}-${areaIndex + 1}-${quizStore.selectedRooms}`"
                name="rooms"
                :value="item"
                :checked="quizStore.selectedRooms.length > 0 && activeCard === roomIndex"
                @update:model-value="handleRooms(item)"
                >{{ item }}</InputRadio
              >
            </div>
          </div>
        </div>
      </div>
    </template>
  </QuestionBlock>
</template>

<style lang="scss" scoped>
.quiz-rooms {
  display: grid;
  gap: 20px;
  max-width: 587px;
  margin: 0 auto;
  @include media($md) {
    gap: 12px;
  }
  // .quiz-rooms__item
  &__item {
    border-radius: 12px;
    padding: 24px;
    min-height: 67px;
    background-color: var(--bg-secondary);
    border: 1px solid transparent;
    @include media($md) {
      min-height: 57px;
      padding: 20px;
    }
    @include hover {
      cursor: pointer;
    }
    &.is-active {
      border-color: var(--text-default-accent);
      @include hover {
        cursor: default;
      }
      & .quiz-rooms__content {
        animation: fadeIn calc(var(--time) * 1.5) both;
        display: block;
      }
      & .quiz-rooms__title {
        color: var(--text-default-accent);
      }
    }
  }
  // .quiz-rooms__title
  &__title {
    color: var(--text-default-primary);
    transition: color var(--time);
  }
  // .quiz-rooms__content
  &__content {
    transition-behavior: allow-discrete;
    transition: opacity var(--time) ease, display var(--time) ease;
    margin-top: 12px;
    display: none;
  }
  // .quiz-rooms__content-caption
  &__content-caption {
    color: var(--text-gray);
  }
  // .quiz-rooms__areas
  &__areas {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 6px;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
