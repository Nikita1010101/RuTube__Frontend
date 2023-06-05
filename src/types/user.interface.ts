import { IVideo } from './video.interface'

interface IUser {
	id?: number
	email: string
	password: string
	name: string
	description: string
	avatarPath: string
	createdAt?: string
	subscripions?: Array<IUser>
	subscribers?: Array<IUser>
	liked?: Array<IVideo>
	videos?: Array<IVideo>
}

interface ISubscription {
	id?: number
	userId: number
	channelId: number
}

interface IGetProfile {
	email: string
	password: string
}

interface ICreateUser {
	name: string
	email: string
	password: string
}

interface IEditProfile {
	id: number
	name: string 
	description: string
}

type TUser = null | { name: string }

export type { IUser, ISubscription, IGetProfile, ICreateUser, IEditProfile, TUser }
