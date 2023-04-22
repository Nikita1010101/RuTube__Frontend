import { IVideo } from '@/types/video.interface'

export interface IDiscoverVideo {
	type: 'most popular' | 'random'
	video: IVideo
}
