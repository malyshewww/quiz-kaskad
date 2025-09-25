<script setup>
const props = defineProps({
  typeClass: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "secondary"].includes(value),
  },
  tag: {
    type: String,
    default: "button",
    validator: (value) => ["router-link", "a", "button"].includes(value),
  },
  link: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <button v-if="tag === 'button'" :class="['btn-default btn', `btn-${typeClass}`]" v-bind="$attrs">
    <slot />
  </button>
  <router-link v-else-if="tag === 'router-link'" :to="link" :class="['btn-default btn', `btn-${typeClass}`]" v-bind="$attrs">
    <slot />
  </router-link>
</template>

<style lang="scss" scoped>
.btn {
  border-radius: 74px;
  padding: 20px 40px;
  min-height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  line-height: 1;
  color: var(--bg-primary);
  transition: background-color var(--time), color var(--time), border-color var(--time);
  @include hover {
    cursor: pointer;
  }
  &-primary {
    background-color: var(--text-default-accent);
    @include hover {
      background-color: var(--action-primary-hover);
    }
    &:disabled,
    &.disabled {
      background-color: var(--action-primary-unavailble);
      pointer-events: none;
    }
  }
  &-secondary {
    background-color: transparent;
    border: 1px solid var(--text-default-accent);
    color: var(--text-default-accent);
    @include hover {
      color: var(--white);
      background-color: var(--text-default-accent);
    }
    &:disabled,
    &.disabled {
      background-color: transparent;
      border-color: var(--action-primary-unavailble);
      color: var(--action-primary-unavailble);
      pointer-events: none;
    }
  }
}
</style>
