import { RefObject } from 'react'
import { IUser } from './user.interface'
import { IVideoElement } from '@/components/Layout/Screens/Video/Video.interface'

interface TUseAuth {
	profile?: IUser
	isLoading: boolean
	login: (email: string, password: string) => Promise<void>
	register: (name: string, email: string, password: string) => Promise<void>
	logout: () => void
}

interface IUseComment {
	addComment: () => void
	deleteComment: () => void
	isLoading: boolean
}

interface IUseEDItProfile {
	updateProfile: (id: number, name: string, description: string) => void
	isLoading: boolean
}

interface IUseLike {
	updateLike: () => void
	isLoading: boolean
	isLike?: boolean
}

interface IUseLocalStorage {
	storageValue: number
	setValue: (value: number) => void
}

interface IStatus {
	isPlaying: boolean
	progress: number
	currentTime: number
	videoTime: number
}

interface IUsePlayer {
	videoRef: RefObject<IVideoElement>
	inputRef: RefObject<HTMLInputElement>
	toggleVideo: () => void
	rewindVideo: (time: number) => void
	fullScreen: () => void
	forward: (time: number) => void
	revert: (time: number) => void
	status: IStatus
}

interface IUseSubscription {
	updateSubscription: () => void
	isLoading: boolean
	isSubscribe?: boolean
}

export type {
	TUseAuth,
	IUseComment,
	IUseEDItProfile,
	IUseLike,
	IUseLocalStorage,
	IUsePlayer,
	IUseSubscription
}
