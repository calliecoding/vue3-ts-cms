import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface CCRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

//拓展AxiosRequestConfig
export interface CCRequestConfig extends AxiosRequestConfig {
  interceptor?: CCRequestInterceptors
}
