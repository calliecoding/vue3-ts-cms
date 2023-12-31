import { createApp } from 'vue'
import type { App } from 'vue'
import rootApp from './App.vue'
import 'normalize.css'
import '@/assets/css/index.less'

// import './service/axios.demo'
// import ccRequest from './service'

import router from './router'
import store from './store'
import { globalRegister } from '@/global/index'
import { setupStore } from './store'

const app: App = createApp(rootApp)

//注册element-plus和其它
app.use(globalRegister)

app.use(router)
app.use(store)
app.mount('#app')
setupStore()
