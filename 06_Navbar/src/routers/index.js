import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../View/Home.vue");
const About = () => import("../View/About.vue");

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
  ],
  linkActiveClass: "active-link",
});
