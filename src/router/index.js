import { createRouter, createWebHistory } from "vue-router";
import MainVue from "@/views/Main.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainVue,
  },
  {
    path: "/:cathcAll(.*)",
    name: "404",
    component: () => import("@/views/Error404.vue"),
  },
  {
    path: "/Services",
    name: "Services",
    component: () => import("@/views/Services.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
