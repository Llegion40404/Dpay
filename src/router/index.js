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
  {
    path: "/telegram",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, sPos) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 10,
      };
    }
  },
});
router.beforeEach((to, from) => {
  if (to.path == "/telegram") window.location.href = "https://t.me/dpaybot";
});
export default router;
