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
const ENV_MG_TOKEN_KEY = process.env.VUE_APP_MG_TOKEN_KEY || 'MG_TOKEN'; // token的key

const ENV_PLATFORM_USERNAME = process.env.VUE_APP_PLATFORM_USERNAME || ''; // admin的账号
const ENV_PLATFORM_PASSWORD = process.env.VUE_APP_PLATFORM_PASSWORD || ''; // admin的密码

export default {
  MODE: ENV_MODE,

  BASE_URL: ENV_BASE_URL, // 项目的base路由

  TOKEN_KEY: ENV_TOKEN_KEY, // token key
  MG_TOKEN_KEY: ENV_MG_TOKEN_KEY, // mgToken key

  PLATFORM_USERNAME: ENV_PLATFORM_USERNAME,
  PLATFORM_PASSWORD: ENV_PLATFORM_PASSWORD,
};
