import { IVideo } from '@/types/video.interface'

export interface IItemVideo {
	video: IVideo
}

export interface IVideoElement extends HTMLVideoElement {
	msRequestFullScreen?: () => void
	mozRequestFullScreen?: () => void
	webkitRequestFullScreen?: () => void
}
