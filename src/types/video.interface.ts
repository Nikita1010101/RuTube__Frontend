interface IUser {
	name: string
	photo: string
}

export interface IUserComments {
	user: IUser
	content: string
}

export interface IVideo {
	id: string
	userId: string
	user: IUser
	previewUrl: string
	videoUrl: string
	title: string
	description: string
	likes: string[]
	duration: number
	views: number
	publicationDate: string
	comments: IUserComments[]
}

