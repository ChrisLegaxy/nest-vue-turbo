import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import { authGuard } from "./route-guards/auth.guard";
import { isAuthicatedGuard } from "./route-guards/is-authenticated.guard";

export const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: import(/* webpackChunkName: "LoginPage" */ "@/pages/Login.vue"),
    beforeEnter: isAuthicatedGuard,
  },
  {
    path: "/register",
    component: () =>
      import(/* webpackChunkName: "RegisterPage" */ "@/pages/Register.vue"),
    beforeEnter: isAuthicatedGuard,
  },
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "HomePage" */ "@/pages/Home.vue"),
    beforeEnter: authGuard,
  },
  {
    path: "/:catchAll(.*)",
    component: () =>
      import(/* webpackChunkName: "NotFoundPage" */ "@/pages/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
