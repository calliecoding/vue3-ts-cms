import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './types'
import login from './login/login'

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
// 定义useStore函数的返回类型
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
