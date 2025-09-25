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
  margin-bottom: 60px;
  // .question-block__header
  &__header {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    margin-bottom: 60px;
  }
  // .question-block__title
  &__title {
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
