import { createWebHistory, createRouter } from "vue-router";
import Calculator from "@/pages/Calculator.vue";

const routes = [
  {
    path: "/",
    name: "Calculator",
    component: Calculator,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;