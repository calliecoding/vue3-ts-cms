export interface IAccount {
  name: string
  password: string
}

// Login接口返回的数据类型
export interface ILoginResult {
  id: number
  name: string
  token: string
}

// 服务器返回数据结果
export interface IDataType<T = any> {
  code: number
  data: T
}
