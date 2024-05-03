import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../view/Home.vue");
const About = () => import("../view/About.vue");
const Contact = () => import("../view/Contact.vue");

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
