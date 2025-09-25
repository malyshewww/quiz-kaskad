<script setup>
import InputRadio from "@/components/ui/form/InputRadio.vue";

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
    // Открываем новую карточку и закрываем остальные
    activeCard.value = index;
  }
};
</script>

<template>
  <div class="quiz-rooms">
    <div
      v-for="(room, roomIndex) in quizRoomsData"
      :key="roomIndex"
      :class="['quiz-rooms__item', { 'is-active': activeCard === roomIndex }]"
      @click="openRoom(roomIndex)"
    >
      <div class="quiz-rooms__title default-text--m default-text--m-medium">{{ room.title }}</div>
      <div class="quiz-rooms__content">
        <div class="quiz-rooms__content-caption default-text default-text--xs">Выберите площадь</div>
        <div class="quiz-rooms__areas">
          <InputRadio v-for="(item, areaIndex) in room.areas" :key="areaIndex" :id="`${room.key}-${areaIndex + 1}`" :name="room.key" :value="item">{{
            item
          }}</InputRadio>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.quiz-rooms {
  display: grid;
  gap: 20px;
  max-width: 587px;
  margin: 0 auto;
  // .quiz-rooms__item
  &__item {
    border-radius: 12px;
    padding: 24px;
    min-height: 67px;
    background-color: var(--bg-secondary);
    @include hover {
      cursor: pointer;
    }
    &.is-active {
      @include hover {
        cursor: default;
      }
      & .quiz-rooms__content {
        animation: fadeIn calc(var(--time) * 1.5) both;
        display: block;
      }
    }
  }
  // .quiz-rooms__title
  &__title {
    color: var(--text-default-primary);
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
