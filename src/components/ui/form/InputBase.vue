<script setup>
import { vMaska } from "maska/vue";

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();
</script>

<template>
  <div class="form-field">
    <input v-maska="attrs.type === 'tel' ? '+7 (###) ###-##-##' : null" class="form-field__input" v-bind="$attrs" />
  </div>
</template>

<style lang="scss" scoped>
.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
  // .form-field__input
  &__input {
    width: 100%;
    min-height: 35px;
    padding: 8px 4px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: var(--letter-spacing);
    font-family: var(--font-family);
    color: var(--text-primary);
    border-bottom: 1px solid var(--stroke-primary);
    &::placeholder {
      font-size: inherit;
      line-height: inherit;
      color: var(--text-default-secondary);
      font-family: inherit;
      transition: color var(--time);
    }
    @include hover {
      &::placeholder {
        color: var(--text-default-primary);
      }
    }
  }
}
</style>
