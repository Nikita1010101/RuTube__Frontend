import { TUser } from "./user.types"

export type TCommentInstance = {
  id: string
  content: string
  createdAt: string
  updatedAt: string
  videoId: number
}

export type TCommentAttachModels = {
  user?: TUser
}

export type TComment = TCommentInstance & TCommentAttachModels