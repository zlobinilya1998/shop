import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import("../views/ShopItemsList"),
  },
  {
    path: "/basket",
    name: "Basket",
    component: () => import("../views/Basket"),
  },
];
const router = new VueRouter({ routes, mode: "history" });

export default router;
