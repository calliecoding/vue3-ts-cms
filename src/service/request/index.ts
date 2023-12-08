import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { CCRequestInterceptors, CCRequestConfig } from './type'

// 类的封装逻辑更强
class CCRequest {
  instance: AxiosInstance
  interceptors?: CCRequestInterceptors
  constructor(config: CCRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

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

    //添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有的实例都有的拦截器: 请求成功拦截')
        return config
      },
      (err) => {
        console.log('所有的实例都有的拦截器: 请求失败拦截')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有的实例都有的拦截器: 响应成功拦截')
        return res
      },
      (err) => {
        console.log('所有的实例都有的拦截器: 响应失败拦截')
        return err
      }
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
