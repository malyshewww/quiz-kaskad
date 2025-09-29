<script setup>
import "@/assets/scss/main.scss";
import AppHeader from "@/components/AppHeader";

const route = useRoute();
const pageClass = computed(() => {
  return route.name === "home" ? "page--home" : "";
});
</script>

<template>
  <AppHeader />
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <div :class="['page', pageClass]" :key="route.path">
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.page {
  padding: calc(var(--header-height) + 20px) 0 11.224vh;
  height: 100%;
  @include media($lg) {
    padding-bottom: 28px;
  }
  @include media($md) {
    padding: calc(var(--header-height) + 7px) 0 0px;
  }
  &--home {
    height: 100vh;
    padding: 0;
    @include media($lg) {
      padding-bottom: 0;
    }
    @include media($md) {
      padding: 0;
      min-height: 100%;
    }
  }
}
</style>
