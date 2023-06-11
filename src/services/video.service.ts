import { IVideo } from '@/types/video.interface'
import { axiosClassic } from 'api/axios'
import { AxiosResponse } from 'axios'

export const VideoService = {
	async getAll(): Promise<AxiosResponse<IVideo[]>> {
		return axiosClassic.get<null, AxiosResponse<IVideo[]>>('/video')
	},

	async getById(id: number): Promise<AxiosResponse<IVideo>> {
		return axiosClassic.get<number, AxiosResponse<IVideo>>(`/video/${id}`)
	}
}
