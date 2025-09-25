import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", () => {
  const isLoading = ref(false);
  return {
    isLoading,
  };
});
