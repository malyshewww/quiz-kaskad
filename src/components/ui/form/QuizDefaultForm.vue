<script setup>
import InputBase from "@/components/ui/form/InputBase";
import Button from "@/components/ui/buttons/Button.vue";
import QuizFormInfo from "@/components/Quiz/QuizFormInfo.vue";

import { useQuizStore } from "@/store/quiz";

import { useForm } from "vee-validate";

import * as yup from "yup";

const quizStore = useQuizStore();

// Установка локали на русский язык
setYupLocale("ru");

const schema = yup.object({
  name: yup.string().required().min(2).label("Имя"),
  phone: yup.string().required().formatPhone().label("Телефон"),
});

const { handleSubmit, defineField, errors } = useForm({
  initialValues: {
    name: "",
    phone: "",
    mail: "",
    webform_id: "contact_form",
  },
  validationSchema: schema,
});

const [name] = defineField("name");
const [phone] = defineField("phone");
const [mail] = defineField("mail");

function onInvalidSubmit({ values, errors, results }) {
  if (import.meta.dev) {
    console.log("values", values);
    console.log("errors", errors);
    console.log("results", results);
    console.log(Object.keys(errors).length);
  }
}

const errorSubmittedForm = () => {
  // Статус формы меняем на false
  quizStore.isSubmittedSuccess = false;
};

async function onSuccess(values, { resetForm }) {
  alert(`Форма отправлена. Поля ${JSON.stringify(values)}`);
  resetForm();
  quizStore.isSubmittedForm = true;
  try {
    const { response } = await usePostFormData(values);
    if (response.ok) {
      console.log("ok");
      resetForm();
      // setTimeout(() => {
      //   popupStore.isSubmittedForm = false;
      // }, 4000);
    } else {
      errorSubmittedForm();
    }
  } catch (error) {
    errorSubmittedForm();
    throw new Error("Ошибка:", error);
  }
}

const onSubmit = handleSubmit(onSuccess, onInvalidSubmit);
</script>

<template>
  <transition name="fade" mode="out-in">
    <QuizFormInfo v-if="quizStore.isSubmittedForm" />
    <form v-else class="form" @submit="onSubmit">
      <div class="form__header">
        <h2>Спасибо, что ответили на&nbsp;все&nbsp;вопросы!</h2>
        <p class="default-text--l default-text--medium">
          Если у вас остались другие вопросы или&nbsp;хотите узнать подробнее про&nbsp;будущий ЖК — оставьте заявку ниже и&nbsp;наши специалисты
          с&nbsp;вами свяжутся.
        </p>
      </div>
      <div class="form__items">
        <InputBase name="name" type="text" placeholder="Имя *" :model-value="name" />
        <InputBase name="phone" type="tel" placeholder="Телефон *" :model-value="phone" />
        <InputBase name="email" type="email" placeholder="E-mail" :model-value="mail" />
        <p class="default-text accent-text">*поля обязательные для заполнения</p>
      </div>
      <div class="form__bottom">
        <Button type="submit" :disabled="Object.keys(errors).length > 0">Отправить</Button>
        <div class="form__text default-text default-text--s default-text--medium">
          Отправляя форму, Вы соглашаетесь на
          <a href="/kaskad.pdf" target="_blank">обработку персональных данных.</a>
        </div>
      </div>
    </form>
  </transition>
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
