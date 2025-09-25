<script setup>
import Button from "../ui/buttons/Button.vue";
import ButtonBack from "../ui/buttons/ButtonBack.vue";
</script>

<template>
  <div class="quiz-actions">
    <ButtonBack>Вернуться назад </ButtonBack>
    <Button type="button" type-class="secondary">Следующий вопрос</Button>
  </div>
</template>

<style lang="scss" scoped>
.quiz-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
