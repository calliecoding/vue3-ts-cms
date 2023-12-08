import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { CCRequestInterceptors, CCRequestConfig } from './type'

// 类的封装逻辑更强
class CCRequest {
  instance: AxiosInstance
  interceptors?: CCRequestInterceptors
  constructor(config: CCRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptor

    //应用实例的请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    //应用实例的响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
  }
  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log('打印结果', res)
    })
  }
  get(): void {
    console.log('...')
  }
  post(): void {
    console.log('...')
  }
}

export default CCRequest
