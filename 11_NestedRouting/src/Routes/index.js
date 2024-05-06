import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../View/Home.vue");
const About = () => import("../View/About.vue");
const Contact = () => import("../View/Contact.vue");

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
];

export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
