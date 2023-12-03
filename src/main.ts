import { createApp } from 'vue'
import type { App } from 'vue'
import rootApp from './App.vue'

import './service/axios.demo'
import ccRequest from './service'

import router from './router'
import store from './store'
import { globalRegister } from '@/global/index'

const app: App = createApp(rootApp)

//注册element-plus和其它
app.use(globalRegister)

app.use(router)
app.use(store)
app.mount('#app')

ccRequest.request()
