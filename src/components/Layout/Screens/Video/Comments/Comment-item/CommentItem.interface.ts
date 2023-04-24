import { IUserComments } from '@/types/video.interface'

type IUserId = { userId: string }

export type ICommentItem = IUserComments & IUserId
