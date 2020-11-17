/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import { App } from 'components';

const router = new VueRouter({
  mode: utils.env ? 'history' : 'hash',
  routes: [{
    path: '*', //404
    meta: { title: '404' },
    component: r => require.ensure([], () => r(require('view/404')), '404'),
  }, {
    path: '/403', //404
    meta: { title: '无权限' },
    component: r => require.ensure([], () => r(require('view/403')), '403'),
  }, {
    path: '/hr/bonus/',
    component: App,
    redirect: '/hr/bonus/batch/main',
    children: [
    ],
  }],
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} - HiHR - Pandora` : 'HiHR - Pandora';
  next();
});

export default router;
