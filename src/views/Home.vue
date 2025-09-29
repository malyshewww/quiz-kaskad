<script setup>
import Button from "@/components/ui/buttons/Button";
import HeroImage from "/images/home-logo.svg";

import { useQuizStore } from "@/store/quiz";

const quizStore = useQuizStore();
</script>

<template>
  <div class="hero">
    <div class="container">
      <div class="hero__body">
        <h1 class="hero__title">
          <span>ГК Каскад планирует</span>
          <span><strong>строить новый&nbsp;ЖК</strong></span>
          <span>в г. саров</span>
        </h1>
        <div class="hero__bottom">
          <div class="hero__sub-title default-text default-text--l">
            Ответьте всего на {{ quizStore.quizComponentsLength }} вопросов, чтобы мы построили Жилой комплекс максимально удобным и комфортным для
            Вас!
          </div>
          <Button tag="router-link" link="/quiz">Пройти опрос</Button>
        </div>
        <div class="hero__image">
          <img :src="HeroImage" alt="логотип каскад" />
        </div>
        <Button tag="router-link" link="/quiz" class="btn-mobile">Пройти опрос</Button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  height: 100%;
  // padding-top: 23.265vh;
  padding-top: 20px;
  // padding-bottom: 11.735vh;
  position: relative;
  background-image: url("/images/home-bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  display: flex;
  align-items: center;
  @include media($md) {
    padding: calc(var(--header-height) + 12px) 0 66px;
    background: linear-gradient(104deg, #eaf6ff 0%, #fff 100%);
    overflow: auto;
    height: auto;
    min-height: 100%;
    display: block;
  }
  & :deep(.btn-mobile) {
    display: none;
    @include media($md) {
      display: flex;
      margin-top: 44px;
    }
  }
  &::before {
    @include media($md) {
      content: "";
      display: block;
      // width: 322px;
      // height: 374px;
      width: 85.87%;
      height: 46.7%;
      position: absolute;
      bottom: 32px;
      left: 16px;
      background-image: url("/images/home-logo-big.svg");
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  & .container {
    height: 100%;
    width: 100%;
    @include media($md) {
      min-height: 100%;
    }
  }
  // .hero__body
  &__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    position: relative;
    height: 100%;
    width: 100%;
    @include media($md) {
      justify-content: flex-start;
    }
  }
  // .hero__title
  &__title {
    text-align: right;
    line-height: 120%;
    white-space: nowrap;
    & span {
      display: block;
      &:first-child {
        margin-right: 15.5%;
        @include media($md) {
          margin: 0;
        }
      }
      &:nth-child(even) {
        margin-right: -0.1%;
        margin-top: -7px;
        @include media($md) {
          margin: 0;
        }
      }
      &:last-child {
        margin-right: 14.7%;
        margin-top: -7px;
        @include media($md) {
          margin: 0;
        }
      }
    }
    @include media($md) {
      white-space: unset;
      text-align: left;
    }
  }
  // .hero__bottom
  &__bottom {
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    gap: 130px;
    max-width: 477px;
    margin-right: 14.2%;
    & :deep(.btn) {
      max-width: 383px;
    }
    @include media($lg) {
      max-width: 400px;
      margin-right: 5%;
    }
    @include media($md) {
      align-self: start;
      margin-bottom: 60px;
      margin-right: 0;
    }
    & :deep(.btn) {
      @include media($md) {
        display: none;
      }
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
    bottom: 12%;
    @include media($vl) {
      left: 0;
    }
    @include media($md) {
      position: static;
      max-width: calc(100% - 85px);
    }
  }
}
</style>
