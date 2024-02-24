import { TVideo } from './video.types'

export type TUserInstance = {
  id: number
  email: string
  password: string
  name: string
  description: string
  avatarUrl: string
  createdAt: string
  updatedAt: string
}

export type TUserAttachModels = {
  subscriptions?: TUser[]
  subscribers?: TUser[]
  liked?: TVideo[]
  videos?: TVideo[]
}

export type TUser = TUserAttachModels & TUserInstance
