import { ILoginState } from './login/types'
export interface IRootState {
  name: string
  age: number
}

// 模块的数据类型
export interface IRootWithModule {
  login: ILoginState
}

// store的数据类型
export type IStoreType = IRootState & IRootWithModule
