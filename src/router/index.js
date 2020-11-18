/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import { App } from "components";
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    return {
      el: "#app",
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
  routes: [
    {
      path: "/home", //首页
      name: "HomeIndex",
      meta: { title: "首页" },
      component: () => import("view/mainLine/home"),
    },
    {
      path: "/403", //403
      name: "403",
      meta: { title: "无权限" },
      component: () => import("view/exception/403"),
    },
    {
      path: "/:pathMatch(.*)*", //404
      name: "not-found",
      component: () => import("view/exception/404"),
    },
  ],
});

export default router;
