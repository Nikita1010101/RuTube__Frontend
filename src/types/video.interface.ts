import { IComment } from "./comment.interface"
import { IUser } from "./user.interface"

interface IVideo {
	id?: number
  title: string
  description: string
  videoPath: string
  previewPath: string
  views: number
  duration: number
	createdAt?: string 
	userId: number
	user?: IUser
  comments?: Array<IComment>
	likes?: Array<IUser>
}

interface ILikes {
	id?: number 
	userId: number
	videoId: number
}

export type { IVideo, ILikes }