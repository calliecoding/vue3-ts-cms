import { createStore } from 'vuex'
import { IRootState } from './types'
import login from './login/login'
import localCache from '@/utils/cache'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'cc',
      age: 18
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: { login }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
export default store
