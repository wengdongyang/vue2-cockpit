/** @format */
// apis
// utils
import { requestGet, requestPost } from '@src/utils';
// types
// mixins
// stores
// configs
// components

export const apiPostLoginApi = (data: any) => {
  return requestPost({ baseURL: '/screenAdmin', url: '/loginApi', data });
};
export const apiGetRefresh = () => {
  return requestGet({ baseURL: '/screenAdmin', url: '/refresh' });
};
export const apiGetCaptcha = () => {
  return requestGet({ baseURL: '/screenAdmin', url: '/captcha' });
};
