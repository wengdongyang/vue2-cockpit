/** @format */
import createPersistedState from 'vuex-persistedstate';
// apis
// utils
// mixins
// stores
// configs
import * as types from './mutation-types';
// components

interface ILOGIN_FORM_STATE {
  username: string;
  password: string;
  [key: string]: any;
}

interface IStoreLoginFormState {
  IS_REMEMBER: boolean;
  LOGIN_FORM_STATE: ILOGIN_FORM_STATE;
}

const storeLoginFormState = {
  state: {
    IS_REMEMBER: false,
    LOGIN_FORM_STATE: {},
  },
  getters: {
    isRemember: (state: IStoreLoginFormState) => state.IS_REMEMBER,
    loginFormState: (state: IStoreLoginFormState) => state.LOGIN_FORM_STATE,
  },
  mutations: {
    [types.SET_IS_REMEMBER](state: IStoreLoginFormState, isRemember: boolean) {
      state.IS_REMEMBER = isRemember;
    },
    [types.SET_LOGIN_FORM_STATE](state: IStoreLoginFormState, loginFormState: ILOGIN_FORM_STATE) {
      state.LOGIN_FORM_STATE = loginFormState;
    },
  },
  actions: {
    setIsRemember(context: any, isRemember: boolean) {
      context.commit(types.SET_IS_REMEMBER, isRemember);
    },
    setLoginFormState(context: any, loginFormState: ILOGIN_FORM_STATE) {
      context.commit(types.SET_LOGIN_FORM_STATE, loginFormState);
    },
  },
  plugins: [createPersistedState({ storage: localStorage })],
};

export default storeLoginFormState;
