import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

//
interface CCRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

//拓展AxiosRequestConfig
interface CCRequestConfig extends AxiosRequestConfig {
  interceptor?: CCRequestInterceptors
}

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
