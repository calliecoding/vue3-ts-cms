// service统一出口
import CCRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const ccRequest = new CCRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求成功的拦截')

      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },

    responseInterceptor: (config) => {
      console.log('响应成功的拦截')
      return config
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})
export default ccRequest
