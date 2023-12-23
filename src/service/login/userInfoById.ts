export interface IUserInfo {
  code: number
  data: IUserInfoData
}

export interface IUserInfoData {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt: string
  updateAt: string
  role: Role
  department: Department
}

interface Role {
  id: number
  name: string
  intro: string
  createAt: string
  updateAt: string
}

interface Department {
  id: number
  name: string
  parentId: any
  createAt: string
  updateAt: string
  leader: string
}
