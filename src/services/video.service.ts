import { IVideo } from '@/types/video.interface'
import { axiosClassic } from 'api/axios'

export const VideoService = {
	async getAll() {
		return axiosClassic.get<IVideo[]>('/videos')
	},

	async getById(id: string) {
		return axiosClassic.get<IVideo>(`/videos/${id}`)
	}
}
