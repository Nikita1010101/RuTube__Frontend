import { TVideo } from '@/types/video.types'

export interface IItemVideo {
	video: TVideo
}

export interface IVideoElement extends HTMLVideoElement {
	msRequestFullScreen?: () => void
	mozRequestFullScreen?: () => void
	webkitRequestFullScreen?: () => void
}
