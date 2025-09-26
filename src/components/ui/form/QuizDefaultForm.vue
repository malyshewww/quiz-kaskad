<script setup>
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import InputBase from "@/components/ui/form/InputBase";
import Button from "@/components/ui/buttons/Button.vue";

onMounted(() => {
  Fancybox.bind('[data-fancybox="doc-fancybox"]', { Hash: false });
});
</script>

<template>
  <form class="form">
    <div class="form__header">
      <h2>Спасибо, что ответили на&nbsp;все&nbsp;вопросы!</h2>
      <p class="default-text--l default-text--medium">
        Если у вас остались другие вопросы или&nbsp;хотите узнать подробнее про&nbsp;будущий ЖК — оставьте заявку ниже и&nbsp;наши специалисты
        с&nbsp;вами свяжутся.
      </p>
    </div>
    <div class="form__items">
      <InputBase name="name" type="text" placeholder="Имя *" />
      <InputBase name="phone" type="tel" placeholder="Телефон *" />
      <InputBase name="email" type="email" placeholder="E-mail *" />
      <p class="default-text accent-text">*поля обязательные для заполнения</p>
    </div>
    <div class="form__bottom">
      <Button type="submit">Отправить</Button>
      <div class="form__text default-text default-text--s default-text--medium">
        Отправляя форму, Вы соглашаетесь на
        <a href="/kaskad.docx" download="kaskad" target="_blank">обработку персональных данных.</a>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.form {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  max-width: 580px;
  @include media($lg) {
    max-width: 100%;
  }
  // .form__header
  &__header {
    display: flex;
    flex-direction: column;
    gap: 12px;
    & h2 {
      font-weight: 500;
      @include media($lg) {
        font-size: 24px;
        line-height: 24px;
      }
    }
    & p {
      line-height: 19px;
      color: var(--text-default-secondary);
    }
  }
  // .form__items
  &__items {
    margin: 31px 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
    & p {
      color: var(--text-default-additional);
    }
    @include media($md) {
      margin: 20px 0px;
    }
  }
  // .form__bottom
  &__bottom {
    margin-top: auto;
    display: flex;
    align-items: center;
    gap: 12px 24px;
    @include media($md) {
      flex-direction: column;
      text-align: center;
      align-items: stretch;
    }
  }
  // .form__text
  &__text {
    color: var(--text-default-secondary);
    max-width: 384px;
    @include media($md) {
      max-width: 100%;
    }
    & a {
      text-decoration: underline;
      text-underline-offset: 4px;
      transition: color var(--time);
      @include hover {
        color: var(--text-default-primary);
      }
    }
  }
}
</style>
