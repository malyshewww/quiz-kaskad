import { createRouter, createWebHistory } from "vue-router";

export const history = createWebHistory();

export const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue"),
    },
    {
      path: "/step",
      name: "step",
      component: () => import("./views/Step.vue"),
    },
  ],
});
