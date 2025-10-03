<script setup>
import { useQuizStore } from "@/store/quiz";
import Button from "@/components/ui/buttons/Button.vue";

const quizStore = useQuizStore();

watch(
  () => quizStore.isSubmittedSuccess,
  (val) => {
    quizStore.isSubmittedSuccess = val;
  }
);
</script>

<template>
  <div v-if="quizStore.isSubmittedSuccess" class="form-info">
    <h2 class="form-info__title">Форма успешно отправлена</h2>
    <div class="form-info__sub-title default-text--l default-text--medium">Наши специалисты с&nbsp;вами свяжутся в ближайшее время</div>
  </div>
  <div v-else class="form-info">
    <h2 class="form-info__title">Ошибка отправки</h2>
    <div class="form-info__sub-title default-text--l default-text--medium">Что-то пошло не так, попробуйте отправить форму еще раз</div>
    <Button type-class="secondary" tag="router-link" link="/">Вернуться на главную</Button>
  </div>
</template>

<style lang="scss" scoped>
.form-info {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 580px;
  // .form-info__title
  &__title {
  }
  // .form-info__sub-title
  &__sub-title {
    color: var(--text-default-secondary);
  }
  & :deep(.btn) {
    margin-top: auto;
    max-width: fit-content;
    @include media($md) {
      max-width: 100%;
    }
  }
}
</style>
