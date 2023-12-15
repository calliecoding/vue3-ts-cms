import ccRequest from '..'
import type { IAccount, IDataType, ILoginResult } from './type'

enum LoginAPI {
  AccountLogin = '/login'
}
export function accountLoginRequest(account: IAccount) {
  return ccRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
