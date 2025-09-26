<script setup></script>

<template>
  <div class="question-block">
    <div class="question-block__header">
      <h2 class="question-block__title"><slot name="title" /></h2>
      <p class="question-block__sub-title default-text default-text--l"><slot name="text" /></p>
    </div>
    <div class="question-block__actions"><slot name="actions" /></div>
  </div>
</template>

<style lang="scss" scoped>
.question-block {
  margin-bottom: 2%;
  // .question-block__header
  &__header {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    margin-bottom: 6.122vh;
    @include media($md) {
      margin-bottom: 32px;
      gap: 12px;
    }
  }
  // .question-block__title
  &__title {
    @include media($md) {
      font-size: 24px;
      line-height: 24px;
    }
  }
  // .question-block__sub-title
  &__sub-title {
    color: var(--text-default-secondary);
  }
  // .question-block__actions
  &__actions {
  }
}
</style>
