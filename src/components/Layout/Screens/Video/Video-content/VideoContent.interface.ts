import { IUser } from '@/types/user.interface'

export interface IVideoContent {
	user: IUser | undefined
	id: string
}
