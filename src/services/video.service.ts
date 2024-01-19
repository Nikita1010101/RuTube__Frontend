import { AxiosResponse } from 'axios'

import { $axios } from '@/api/axios'
import { TSuccessRequest } from '@/types/request.types'
import { TVideo } from '@/types/video.types'

export const VideoService = {
  async getOne(videoId: number) {
    return await $axios.get<AxiosResponse<TVideo[], number>>(`/video/${videoId}`, {
      withCredentials: true,
    })
  },
  async updateVideo() {
    return await $axios.get<AxiosResponse<null, TSuccessRequest>>(
      '/video/update/video',
      {
        withCredentials: true,
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    )
  },
}
