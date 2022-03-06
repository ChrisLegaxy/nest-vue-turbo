import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: import(/* webpackChunkName: "LoginPage" */ "@/pages/Login.vue"),
  },
  {
    path: "/register",
    component: () =>
      import(/* webpackChunkName: "RegisterPage" */ "@/pages/Register.vue"),
  },
  {
    path: "/home",
    component: () =>
      import(/* webpackChunkName: "HomePage" */ "@/pages/Home.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
