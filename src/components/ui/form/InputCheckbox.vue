<script setup>
const props = defineProps({
  isDescr: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();
</script>

<template>
  <div class="checkbox">
    <input type="checkbox" v-bind="$attrs" class="checkbox__input" @change="emit('update:modelValue', $event.target.value)" />
    <label :for="attrs.id" class="checkbox__label">
      <span class="checkbox__text">
        <span class="checkbox__text--main default-text default-text--l default-text--medium">
          <slot name="single" />
        </span>
        <span v-if="isDescr" class="checkbox__text--descr default-text default-text--s">
          <slot name="descr" />
        </span>
      </span>
    </label>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/base/extends" as *;
.checkbox {
  height: 100%;
  // .checkbox__label
  &__label {
    border-radius: 8px;
    padding: 24px;
    min-height: 67px;
    background-color: #f3f3f3;
    padding: 10px 24px;
    display: flex;
    align-items: center;
    text-align: left;
    border: 1px solid transparent;
    transition: border-color var(--time);
    height: 100%;
    @include hover {
      cursor: pointer;
      border-color: var(--text-default-accent);
    }
    @include media($md) {
      min-height: 57px;
      padding: 10px 20px;
    }
  }
  // .checkbox__input
  &__input {
    @extend %visuallyHidden;
    &:checked ~ .checkbox__label {
      border-color: var(--text-default-accent);
      & .checkbox__text--main {
        color: var(--text-red);
      }
    }
  }
  // .checkbox__text
  &__text {
    display: flex;
    flex-direction: column;
    gap: 4px;
    &--main {
      transition: color var(--time);
    }
    &--descr {
      color: var(--text-gray);
    }
  }
}
</style>
