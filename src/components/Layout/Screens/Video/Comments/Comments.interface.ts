import { IUserComments } from '@/types/video.interface'
import { LegacyRef } from 'react'

export interface IComments {
	id: string
	inputRef?: LegacyRef<HTMLInputElement>
  comments?: IUserComments[]
}
