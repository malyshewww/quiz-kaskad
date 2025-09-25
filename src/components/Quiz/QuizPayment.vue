<script setup>
import InputCheckbox from "@/components/ui/form/InputCheckbox.vue";

const quizPaymentData = [
  {
    title: "Собственные средства ( полная оплата)",
  },
  {
    title: "Ипотека",
  },
  {
    title: "Рассрочка",
  },
];
</script>

<template>
  <div class="quiz-payment">
    <InputCheckbox v-for="(item, index) in quizPaymentData" :key="index" :id="`payment-${index + 1}`" name="payment" :value="item.title">
      <template #single>{{ item.title }}</template>
    </InputCheckbox>
  </div>
</template>

<style lang="scss" scoped>
.quiz-payment {
  display: grid;
  gap: 20px;
  max-width: 587px;
  margin: 0 auto;
}
</style>
