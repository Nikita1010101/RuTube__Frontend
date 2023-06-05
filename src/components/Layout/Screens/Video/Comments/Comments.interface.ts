import { IComment } from '@/types/comment.interface'
import { LegacyRef } from 'react'

export interface IComments {
	userName?: string
	avatarPath?: string
	videoId?: number
	inputRef?: LegacyRef<HTMLInputElement>
  comments?: IComment[]
}
