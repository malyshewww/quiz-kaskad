<script setup>
import Button from "@/components/ui/buttons/Button";
import ButtonBack from "@/components/ui/buttons/ButtonBack";
import InputBase from "@/components/ui/form/InputBase";
import HeroImage from "/images/home-logo.svg";

// useHead({
//   bodyAttrs: {
//     class: "page--home",
//   },
// });
</script>

<template>
  <div class="hero">
    <div class="container">
      <div class="hero__body">
        <h1 class="hero__title">
          <span>ГК Каскад планирует</span>
          <span><strong>строить новый ЖК</strong></span>
          <span>в г. саров</span>
        </h1>
        <div class="hero__bottom">
          <div class="hero__sub-title default-text default-text--l">
            Ответьте всего на 5 вопросов, что бы мы построили Жилой комплекс максимально удобным и комфортным для Вас!
          </div>
          <Button tag="router-link" link="/quiz">Пройти опрос</Button>
        </div>
        <div class="hero__image">
          <img :src="HeroImage" alt="логотип каскад" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  height: 100%;
  padding-top: 23.265vh;
  padding-bottom: 11.735vh;
  position: relative;
  background-image: url("/images/home-bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  &::before {
    content: "";
    display: block;
    height: 100%;
    max-width: 50.97%;
    position: absolute;
    inset: 30px;
  }
  & .container {
    height: 100%;
  }
  // .hero__body
  &__body {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
    height: 100%;
  }
  // .hero__title
  &__title {
    text-align: right;
    white-space: nowrap;
    & span {
      display: block;
      &:first-child {
        margin-right: 16%;
      }
      &:last-child {
        margin-right: 15%;
      }
    }
  }
  // .hero__bottom
  &__bottom {
    align-self: flex-end;
    max-width: 471px;
    display: flex;
    flex-direction: column;
    gap: 130px;
    margin-right: 14%;
    & :deep(.btn) {
      max-width: 383px;
    }
  }
  // .hero__sub-title
  &__sub-title {
    color: var(--text-heading);
  }
  // .hero__image
  &__image {
    position: absolute;
    bottom: 0;
    left: 50px;
    max-width: 33%;
  }
}
.container {
}
.default-text {
}
.default-text--l {
}
</style>
