import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Home from "./view/Home.vue";
import About from "./view/About.vue";
import Contact from "./view/Contact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

createApp(App).use(router).mount("#app");
