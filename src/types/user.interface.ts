export interface IUser {
	id: string
	email: string
	password: string
	name: string
	photo: string
	subscriptions: string[]
	subscribers: string[]
	aboutChannel: string
}

export type TypeUser = null | { name: string }
