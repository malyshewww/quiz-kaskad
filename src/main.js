import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createHead } from "@vueuse/head";
import { router } from "./router";

const app = createApp(App).use(createHead()).use(createPinia()).use(router).mount("#app");
