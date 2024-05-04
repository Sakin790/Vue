import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../View/Home.vue");
const About = () => import("../View/About.vue");
const Navbar = () => import("../View/Navbar.vue");


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Navbar },
    { path: "/home", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
  ],
});
