import { createApp } from 'vue'
import type { App } from 'vue'
import rootApp from './App.vue'

import router from './router'
import store from './store'
import { registerApp } from '@/global/index'

const app: App = createApp(rootApp)
registerApp(app)
app.use(router)
app.use(store)
app.mount('#app')
