import { createApp } from 'vue'
import type { App } from 'vue'
import rootApp from './App.vue'
import 'normalize.css'
import '@/assets/css/index.less'

// import './service/axios.demo'
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
interface DataType {
  data: any
  returnCode: string
  success: boolean
}
// ccRequest.request<DataType>({ url: '/home/multidata', method: 'GET' })
ccRequest
  .request<DataType>({
    url: '/home/multidata',
    method: 'GET',
    showLoading: false,
    headers: {},
    interceptors: {
      requestInterceptor: (config) => {
        config.headers['token'] = '123testhhhh'
        return config
      },

      responseInterceptor: (config) => {
        return config
      }
    }
  })
  .then((res) => {
    console.log(res.data)
  })
