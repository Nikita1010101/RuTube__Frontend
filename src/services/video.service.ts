import axios from 'axios'

import { $axios } from '@/api/axios'
import { TSuccessRequest } from '@/types/request.types'
import { TVideo } from '@/types/video.types'

export const VideoService = {
  async getOne(videoId: number) {
    return await axios.get<TVideo>(`${process.env.APP_API}/api/video/${videoId}`, {
      withCredentials: true,
    })
  },
  async updateVideo(body: FormData, setProgress: (value: number) => void) {
    return await $axios.patch<TSuccessRequest>('/video/update/video', body, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: (progressEvent) => {
        const progress =
          (progressEvent.loaded / Number(progressEvent.total)) * 100
        setProgress(Math.ceil(progress))
      },
    })
  },
  async updateVideoContent(body: FormData) {
    return await $axios.patch<TSuccessRequest>('/video/update/content', body, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },
}
