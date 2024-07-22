/** @format */
// apis
// utils
import { requestHeader } from '@src/utils';
// types
// mixins
// stores
// configs
// components

const dazongheBaseURL = '//dzh01.ikeqiao.net:9009'; // 大综合的BaseURL
const dazongheToken = '14d5a02af7e788ab75980975d15ab081'; // 大综合的token

export const apiGetAdminFireworkPage = (params: any) => {
  return requestHeader({
    headers: { token: 'f9502336e503d061a6c763daf17d7492' },
    baseURL: '//124.91.150.6:9013',
    url: '/admin/firework/page',
    method: 'GET',
    params,
  });
};

export const apiGetAlarmAlarminfoList = (params: any) => {
  return requestHeader({
    headers: { token: dazongheToken },
    baseURL: dazongheBaseURL,
    url: '/alarm/alarminfo/list',
    method: 'GET',
    params,
  });
};

export const apiGetApiSgptGetOtList = (params: any) => {
  return requestHeader({
    headers: { token: dazongheToken },
    baseURL: dazongheBaseURL,
    url: '/api/sgpt/getOTList',
    method: 'GET',
    params,
  });
};

export const apiGetApiSgptGetOtDetail = (params: any) => {
  return requestHeader({
    headers: { token: dazongheToken },
    baseURL: dazongheBaseURL,
    url: '/api/sgpt/getOtDetail',
    method: 'GET',
    params,
  });
};

export const apiGetApiSgptGetEventByClass = (params: any) => {
  return requestHeader({
    headers: { token: dazongheToken },
    baseURL: dazongheBaseURL,
    url: '/api/sgpt/getEventByClass',
    method: 'GET',
    params,
  });
};

export const apiGetApiSgptGetEventDetail = (params: any) => {
  return requestHeader({
    headers: { token: dazongheToken },
    baseURL: dazongheBaseURL,
    url: '/api/sgpt/getEventDetail',
    method: 'GET',
    params,
  });
};

export const apiGetSourceComprehensiveList = (params: any) => {
  return requestHeader({
    headers: { token: dazongheToken },
    baseURL: dazongheBaseURL,
    url: '/source/comprehensive/list',
    method: 'GET',
    params,
  });
};
