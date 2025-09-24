<script setup></script>

<template>
  <div class="btn">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.btn {
  border-radius: 74px;
  padding: 20px 40px;
  min-height: 56px;
  background: var(--text-default-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  line-height: 1;
  color: var(--bg-primary);
}
</style>
