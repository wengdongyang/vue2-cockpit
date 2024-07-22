/** @format */

import 'minireset.css/minireset.css';

import 'nprogress/nprogress.css';
import 'font-awesome/css/font-awesome.css';

import 'element-ui/lib/theme-chalk/index.css';
import 'element-theme-dark';

import Vue from 'vue';
import Element from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
