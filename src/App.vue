<script setup>
import "@/assets/scss/main.scss";
import AppHeader from "@/components/AppHeader";

const route = useRoute();
const pageClass = computed(() => {
  return route.name === "home" ? "page--home" : "";
});
</script>

<template>
  <div :class="['page', pageClass]">
    <AppHeader />
    <router-view />
    <!-- <router-link to="/"> App </router-link>
    <router-link to="/quiz"> Quiz </router-link> -->
  </div>
</template>

<style lang="scss" scoped>
.page {
  padding: calc(var(--header-height) + 20px) 0 110px;
  &--home {
    padding: 0;
    height: 100%;
  }
}
</style>
