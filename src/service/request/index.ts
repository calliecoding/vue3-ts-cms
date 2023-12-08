import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
// 类的封装逻辑更强
class CCRequest {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
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
