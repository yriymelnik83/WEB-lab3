import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import enginer from "../views/enginer.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/enginer",
    name: "enginer",
    component: enginer,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
