<script setup></script>

<template>
  <div class="btn-default btn-back">
    <slot />
  </div>
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
}
</style>
