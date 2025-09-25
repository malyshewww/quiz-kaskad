<script setup>
const attrs = useAttrs();
defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <div class="radio">
    <input type="radio" v-bind="$attrs" class="radio__input" />
    <label :for="attrs.id" class="radio__label default-text default-text--s default-text--s-medium">
      <slot />
    </label>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/base/extends" as *;
.radio {
  // .radio__input
  &__input {
    @extend %visuallyHidden;
    &:checked + .radio__label {
      border-color: var(--text-default-accent);
      color: var(--bg-primary);
      background-color: var(--text-default-accent);
    }
  }
  // .radio__label
  &__label {
    border: 1px solid #afafaf;
    border-radius: 33px;
    min-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    border: 1px solid #afafaf;
    transition: border-color var(--time), background-color var(--time), color var(--time);
    @include hover {
      cursor: pointer;
    }
  }
}
</style>
