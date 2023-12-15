import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {},
  getters: {},
  actions: {
    accountLoginAction({ commit }, payload) {
      console.log('payload', payload)
    }
  }
}

export default loginModule
