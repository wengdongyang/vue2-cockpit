/** @format */
import Vue from 'vue';
import VueRouter from 'vue-router';
// apis
// utils
// types
import type { RouteConfig } from 'vue-router';
// mixins
// stores
// configs
// components
import LayoutLogin from '../layouts/login/LayoutLogin.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: '/', name: '', redirect: '/login' },
  { path: '/login', name: 'login', component: LayoutLogin },
];

const router = new VueRouter({ mode: 'hash', base: process.env.BASE_URL, routes });

export default router;
