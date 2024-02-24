import { TVideo } from '@/types/video.types'

export interface IDiscoverVideo {
	type: 'most popular' | 'random'
	video: TVideo
}
