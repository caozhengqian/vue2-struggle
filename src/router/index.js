import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import lifeRouters from "./module/lifeRouters/lifeRouters";
import vue2Routers from "./module/vue2/vue2Routers";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  ...lifeRouters,
  ...vue2Routers
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
