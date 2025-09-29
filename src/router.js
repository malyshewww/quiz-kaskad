import { createRouter, createWebHistory } from "vue-router";

export const history = createWebHistory();

export const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/quiz",
      name: "quiz",
      component: () => import("@/views/Quiz.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});
