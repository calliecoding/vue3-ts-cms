import { Module } from 'vuex'
import type { ILoginState } from './types'
import { IRootState } from '../types'
import { accountLoginRequest } from '@/service/login/login'
import type { IAccount } from '@/service/login/type'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      console.log('loginResult', loginResult)
      commit('changeToken', token)
    },
    phoneLoginAction({ commit }, payload) {
      console.log('phoneLoginAction', payload)
    }
  }
}

export default loginModule
