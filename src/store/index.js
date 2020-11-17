import Vue from 'vue';
import Vuex from 'vuex';

import com from './com'; //公共js,部门组件，职级
import batch from './batch'; //奖金批次

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    com,
    batch,
  },
});
