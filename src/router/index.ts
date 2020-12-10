import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/account/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/account/Register.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
