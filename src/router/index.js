import { createRouter, createWebHistory } from "vue-router";
const CheckoutView = () => import("../views/CheckoutView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: CheckoutView,
    },
  ],
});

export default router;
