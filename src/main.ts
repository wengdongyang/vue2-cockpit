/** @format */
import 'minireset.css/minireset.css';
import 'ant-design-vue/dist/antd.css';
import 'font-awesome/css/font-awesome.css';
import 'nprogress/nprogress.css';

import 'element-theme-dark';
import 'element-ui/lib/theme-chalk/index.css';

import Element from 'element-ui';
import { PiniaVuePlugin, createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

Vue.use(Element);
Vue.use(PiniaVuePlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  pinia,
  render: (h) => h(App),
}).$mount('#app');
