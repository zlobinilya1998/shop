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
  {
    path: "/:category",
    name: "Category",
    component: () => import("../views/Category"),
  },
  {
    path: "/category/item/:index",
    name: "Items",
    component: () => import("../components/Item"),
  },
];
const router = new VueRouter({ routes, mode: "history" });

export default router;
