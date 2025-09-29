import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createHead } from "@vueuse/head";
import { router } from "./router";

const app = createApp(App);

app.use(router).use(createHead()).use(createPinia());

// await router.isReady();

app.mount("#app");
