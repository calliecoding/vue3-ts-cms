interface Root {
  code: number
  data: IMenus[]
}

export interface IMenus {
  id: number
  name: string
  type: number
  url: string
  icon: string
  sort: number
  children: Children[]
}

interface Children {
  id: number
  url: string
  name: string
  sort: number
  type: number
  children?: Children2[]
  parentId: number
}

interface Children2 {
  id: number
  url: any
  name: string
  sort: any
  type: number
  parentId: number
  permission: string
}
