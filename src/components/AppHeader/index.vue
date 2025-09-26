<script setup>
import HeaderLogo from "/images/header-logo.svg";
import HeaderPartLogo from "/images/header-part-logo.svg";
import { useAppStore } from "@/store/app";

const route = useRoute();

const currentLogo = computed(() => {
  return route.name == "home" ? HeaderPartLogo : HeaderLogo;
});

const appStore = useAppStore();
console.log("is", appStore.isLoading);
</script>

<template>
  <header class="header">
    <div class="header__body container">
      <router-link to="/" class="header__logo">
        <img :src="currentLogo" alt="логотип" />
      </router-link>
      <a href="tel:+78312664871" class="header__phone default-text default-text--l default-text--l-medium">+7 (831) 266-48-71 </a>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: var(--white);
  margin: 0;
  z-index: 3;
  .page--home & {
    height: var(--header-home-height);
    background-color: transparent;
  }
  // .header__body
  &__body {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
  // .header__logo
  &__logo {
  }
  // .header__phone
  &__phone {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text-heading);
    transition: color var(--time);
    &::before {
      content: "";
      display: block;
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      @include mask-image("/images/icons/phone.svg", var(--text-default-accent));
    }
    @include hover {
      color: var(--text-default-accent);
    }
    @include media($md) {
      font-size: 0;
      display: block;
      width: 42px;
      height: 42px;
      flex-shrink: 0;
      &::before {
        height: 100%;
        width: 100%;
        mask-size: 33px 33px;
      }
    }
  }
}
</style>
