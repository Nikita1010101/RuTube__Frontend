import { TComment } from './comment.types'
import { TUser } from './user.types'

export type TVideoInstance = {
  id?: number
  title: string
  description: string
  videoUrl: string
  previewUrl: string
  views: number
  duration: number
  createdAt: string
  updatedAt: string
  userId: number
}

export type TVideoAttachModels = {
  user?: TUser
  comments?: TComment[]
  likes?: TUser[]
}

export type TVideo = TVideoInstance & TVideoAttachModels

export type IVideoContent = Pick<
  TVideoInstance,
  'description' | 'duration' | 'previewUrl' | 'title' | 'videoUrl'
>

export type TVideoSorting = 'last' | 'old' | 'popular'
