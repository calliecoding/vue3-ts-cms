import { createApp } from 'vue'
import App from './App.vue'
import { ElButton, ElRow } from 'element-plus'

import router from './router'
import store from './store'

const app = createApp(App)

const components = [ElButton, ElRow]
for (const component of components) {
  app.component(component.name, component)
}
app.use(router)
app.use(store)
app.mount('#app')
