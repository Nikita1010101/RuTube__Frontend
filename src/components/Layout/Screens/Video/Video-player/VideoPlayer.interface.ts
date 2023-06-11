import { IVideoElement } from '../Video.interface'

export interface IVideoPlayer {
	videoId?: number
	previewUrl: string
	videoUrl: string
	videoRef: React.RefObject<IVideoElement>
	inputRef: React.RefObject<HTMLInputElement>
	toggleVideo: () => void
	rewindVideo: (time: number) => void
	fullScreen: () => void
	forward: (time: number) => void
	revert: (time: number) => void
	status: {
		isPlaying: boolean
		currentTime: number
		videoTime: number
		progress: number
	}
}
