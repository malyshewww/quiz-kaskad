import { defineStore } from "pinia";

export const useQuizStore = defineStore("quizStore", () => {
  const isOpenQuizResult = ref(false);
  const quizComponentsLength = ref(5);
  const currentStep = ref(1);
  const selectedRooms = ref([]);
  const selectedType = ref([]);
  const selectedPlan = ref([]);
  const selectedPayment = ref([]);
  const selectedAttributes = ref([]);
  return {
    isOpenQuizResult,
    quizComponentsLength,
    currentStep,
    selectedRooms,
    selectedType,
    selectedPlan,
    selectedPayment,
    selectedAttributes,
  };
});
