/** @format */
// apis
// utils
// types
// mixins
// stores
// configs
// components
const ENV_MODE = process.env.MODE || 'production'; // 模式

const ENV_BASE_URL = process.env.BASE_URL || '/town/cms/'; // 项目的BASEURL

const ENV_TOKEN_KEY = process.env.VUE_APP_TOKEN_KEY || 'TOKEN'; // token的key

export default {
  MODE: ENV_MODE,

  BASE_URL: ENV_BASE_URL, // 项目的base路由

  TOKEN_KEY: ENV_TOKEN_KEY, // token key
};
