import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';

import router from 'router';
import { i18n } from 'i18';
import { App } from 'components';

Vue.use(VueRouter);
Vue.use(VueI18n);


console.log("__________")
console.log(App)
console.log("__________")


/* module.exports = new Vue({
  el: '#app',
  i18n,
  store,
  router,
  filters,
  render: h => h(App),
}); */

module.exports = new Vue({
  el: '#app',
  i18n,
  router,
  filters,
  render: h => h(App),
});

