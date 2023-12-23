import ccRequest from '..'
import type {
  IAccount,
  IDataType,
  ILoginResult,
  IUserInfoData,
  IMenus
} from './type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法: /users/1
  UserMenus = '/role/' // 用法: role/1/menu
}
// 用户登录
export function accountLoginRequest(account: IAccount) {
  return ccRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

// 请求用户数据
export function requestUserInfoById(id: number) {
  return ccRequest.get<IDataType<IUserInfoData>>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

//根据用户角色请求菜单
export function requestUserMenusByRoleId(id: number) {
  return ccRequest.get<IDataType<IMenus>>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
