import { setLocale } from "yup";
import * as yup from "yup";

const locales = {
  ru: {
    mixed: {
      default: "Поле обязательно для заполнения",
      required: "поле ${label} обязательно для заполнения",
    },
    string: {
      min: "Минимальная длина - ${min} символов",
      max: "Максимальная длина - ${max} символов",
      formatPhone: "Введите телефон в формате +7 (XXX) XXX-XX-XX",
    },
  },
};

yup.addMethod(yup.string, "formatPhone", function (message) {
  return this.test("formatPhone", message, function (value) {
    const { path, createError } = this;
    // Пример проверки формата телефона
    const phoneRegex = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
    if (!value || !phoneRegex.test(value)) {
      return createError({
        path,
        message: message || locales.ru.string.formatPhone,
      });
    }
    return true;
  });
});

export const setYupLocale = (locale) => {
  setLocale(locales[locale]);
};
