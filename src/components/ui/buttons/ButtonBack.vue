<script setup></script>

<template>
  <button type="button" class="btn-default btn-back" v-bind="$attrs">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn-back {
  color: var(--text-default-additional);
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: color var(--time);
  @include hover {
    cursor: pointer;
    color: var(--text-default-primary);
  }
  &:disabled,
  &.disabled {
    cursor: default;
    color: var(--action-primary-unavailble);
    pointer-events: none;
  }
}
</style>
