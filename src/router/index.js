/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import { App } from "components";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory('/'),
  scrollBehavior(to, from, savedPosition) {
    debugger;
    return {
      el: "#app",
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
  routes: [
    {
      path: "/403", //404
      meta: { title: "无权限" },
      //component: (r) => require.ensure([], () => r(require("view/403")), "403"),
      component: () => import("view/403"),
    },
  ],
});

export default router;
