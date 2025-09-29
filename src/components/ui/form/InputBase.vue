<script setup>
import { vMaska } from "maska/vue";

import { useField } from "vee-validate";

const emit = defineEmits(["update:modelValue"]);

defineProps({
  modelValue: {
    type: String,
    required: false,
    default: () => "",
  },
});

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();

const { value, errorMessage, meta } = useField(() => attrs.name);
</script>

<template>
  <div :class="['form-field']">
    <input
      v-model="value"
      v-maska="attrs.type === 'tel' ? '+7 (###) ###-##-##' : null"
      :class="['form-field__input', { 'form-field__input--error': errorMessage }]"
      v-bind="$attrs"
      @input="emit('update:modelValue', $event.target.value)"
    />
    <div class="form-field__error default-text default-text--xs" v-if="errorMessage">{{ errorMessage }}</div>
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
    &--error {
      border-color: var(--text-default-accent);
      caret-color: var(--text-default-accent);
    }
  }
  // .form-field__error
  &__error {
    color: var(--text-default-accent);
  }
}
</style>
