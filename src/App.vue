<script setup>
import AppHeader from "@/components/AppHeader";

const route = useRoute();

const pageClass = computed(() => {
  return route.name === "home" ? "page--home" : "";
});


useHead({
  noscript: [
    {
      innerHTML: '<div><img src="https://mc.yandex.ru/watch/104359681" style="position:absolute; left:-9999px;" alt="" /></div>',
    },
  ],
})
</script>

<template>
  <AppHeader />
  <router-view v-slot="{ Component, route }">
    <template v-if="Component">
      <transition name="fade" mode="out-in">
        <div :class="['page', pageClass]" :key="route.path">
          <component :is="Component" />
        </div>
      </transition>
    </template>
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
