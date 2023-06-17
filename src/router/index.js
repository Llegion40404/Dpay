import { createRouter, createWebHistory } from "vue-router";
import MainVue from "@/views/Main.vue";
import DevVue from "@/views/Dev.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainVue,
  },
  {
    path: "/wp",
    name: "wp",
    component: DevVue,
  },
  {
    path: "/FAQs",
    name: "FAQs",
    component: () => import("@/views/FAQs.vue"),
  },
  {
    path: "/help",
    name: "Help",
    component: () => import("@/views/Help.vue"),
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
