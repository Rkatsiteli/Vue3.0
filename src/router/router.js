/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import { App } from 'components';

export default [
  {
    path: '/hr/bonus/batch',
    component: App,
    children: [
      {
        path: 'main',
        meta: { title: '奖金批次列表' },
        component: r => require.ensure([], () => r(require('page/bonus/batch/main')), 'batch/main'),
      },
      {
        path: 'list',
        meta: { title: '奖金批次列表' },
        component: r => require.ensure([], () => r(require('page/bonus/batchList/main')), 'batch/batchList'),
      },
      {
        path: 'index',
        meta: { title: '奖金批次' },
        component: r => require.ensure([], () => r(require('page/bonus/batch/')), 'batch/index'),
      }, {
        path: 'index/log',
        meta: { title: '奖金批次' },
        component: r => require.ensure([], () => r(require('page/bonus/batch/log')), 'batch/log'),
      }],
  },
  {
    path: '/hr/bonus/splitResult', //奖金结果跟分拆
    component: App,
    children: [
      {
        path: 'search',
        meta: { title: '奖金结果查询' },
        component: r => require.ensure([], () => r(require('page/bonus/splitResult/search')), 'splitResult/search'),
      },
      {
        path: 'december',
        meta: { title: '12月分摊奖金分拆' },
        component: r => require.ensure([], () => r(require('page/bonus/splitResult/december')), 'splitResult/december'),
      },
    ],
  }, {//与奖金相关的功能
    path: '/hr/bonus/reportForm',
    component: App,
    redirect: '/hr/bonus/reportForm/index',
    children: [
      {
        path: 'index',
        meta: { title: '奖金分配表' },
        component: r => require.ensure([], () => r(require('page/bonus/reportForm')), 'reportForm/index'),
      },
    ],
  },
  {//与奖金展示报表相关的功能
    path: '/hr/bonus/reportShowForm',
    component: App,
    redirect: '/hr/bonus/reportShowForm/index',
    children: [
      {
        path: 'index',
        meta: { title: '奖金发放日志预览表' },
        component: r => require.ensure([], () => r(require('page/bonus/reportShowForm')), 'reportShowForm/index'),
      },
    ],
  },
  {//奖金数据迁移
    path: '/hr/bonus/migrate',
    component: App,
    redirect: '/hr/bonus/migrate/index',
    children: [
      {
        path: 'index',
        meta: { title: '奖金数据迁移' },
        component: r => require.ensure([], () => r(require('page/bonus/migrate')), 'migrate/index'),
      },
    ],
  },
  /*{//个人、组织绩效占比
    path: '/hr/bonus/proportion',
    component: App,
    redirect: '/hr/bonus/proportion/index',
    children: [
      {
        path: 'index',
        meta: { title: '个人、组织绩效占比' },
        component: r => require.ensure([], () => r(require('page/bonus/proportion')), 'migrate/proportion'),
      },
    ],
  },
  {//绩效分数及裁量结果对应关系
    path: '/hr/bonus/relation',
    component: App,
    redirect: '/hr/bonus/relation/index',
    children: [
      {
        path: 'index',
        meta: { title: '绩效分数及裁量结果对应关系' },
        component: r => require.ensure([], () => r(require('page/bonus/relation')), 'migrate/relation'),
      },
    ],
  }, */
  {//绩效分数及裁量结果对应关系
    path: '/hr/bonus/relPro',
    component: App,
    redirect: '/hr/bonus/relPro/index',
    children: [
      {
        path: 'index',
        meta: { title: '个人、组织绩效占比' },
        component: r => require.ensure([], () => r(require('page/bonus/relPro')), 'migrate/relPro'),
      },
    ],
  },
];
