import { createRouter, createWebHistory } from "vue-router";
import Home from "../View/Home.vue";
import About from "../View/About.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
  ],
});
