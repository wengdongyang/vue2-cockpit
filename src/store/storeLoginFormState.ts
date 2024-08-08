/** @format */
import dayjs from 'dayjs';
import * as lodash from 'lodash';
import { defineStore } from 'pinia';
// apis
// utils
// types
// mixins
// stores
// configs
// components
interface I_LOGIN_FORM_STATE {
  account?: string;
  password?: string;
  [key: string]: any;
}
interface IStoreLoginFormState {
  STORAGE_TIME: string;
  IS_REMEMBER: boolean;
  LOGIN_FORM_STATE: I_LOGIN_FORM_STATE;
}
export const useLoginFormState = defineStore('loginFormState', {
  state: (): IStoreLoginFormState => {
    return {
      STORAGE_TIME: '', // 存储时间
      IS_REMEMBER: false, // 是否记住密码
      LOGIN_FORM_STATE: {}, // 账号密码
    };
  },
  getters: {
    storageTime: (state: IStoreLoginFormState) => state.STORAGE_TIME,
    isRemember: (state: IStoreLoginFormState) => state.IS_REMEMBER,
    loginFormState: (state: IStoreLoginFormState) => state.LOGIN_FORM_STATE,
  },
  actions: {
    checkLoginFormState() {
      try {
        const storageTime = this.STORAGE_TIME;
        const now = dayjs();
        if ((storageTime && now.subtract(1, 'week').isAfter(dayjs(storageTime))) || !storageTime) {
          this.IS_REMEMBER = false;
          this.LOGIN_FORM_STATE = {};
          this.STORAGE_TIME = '';
        }
      } catch (error) {
        console.warn(error);
      }
    },
    setLoginFormState(loginFormState: I_LOGIN_FORM_STATE) {
      try {
        if (loginFormState && !lodash.isEmpty(loginFormState)) {
          const account = lodash.get(loginFormState, ['account']);
          const password = lodash.get(loginFormState, ['password']);
          this.IS_REMEMBER = true;
          this.LOGIN_FORM_STATE = { account, password };
          this.STORAGE_TIME = dayjs().format('YYYY-MM-DD HH:mm:ss');
        } else {
          this.IS_REMEMBER = false;
          this.LOGIN_FORM_STATE = {};
          this.STORAGE_TIME = '';
        }
      } catch (error) {
        console.warn(error);
      }
    },
  },
  persist: { storage: localStorage },
});
