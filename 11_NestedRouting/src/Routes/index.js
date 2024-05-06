import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../View/Home.vue");
const About = () => import("../View/About.vue");
const Contact = () => import("../View/Contact.vue");
const Id = () => import("../View/Id.vue");


const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/user/:id", component: Id }
];

export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
