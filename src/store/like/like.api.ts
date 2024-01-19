import { TVideo } from '@/types/video.types'
import { videoApi } from '@/store/video/video.api'
import { TSuccessRequest } from '@/types/request.types'

export const likeApi = videoApi.injectEndpoints({
  endpoints: (builder) => ({
    likeGetVideos: builder.query<TVideo[], null>({
      query: () => '/like/video',
      providesTags: ['LIKE'],
    }),

    likeCheck: builder.query<boolean, number>({
      query: (videoId: number) => `/like/check/${videoId}`,
    }),

    likeGetLength: builder.query<number, number>({
      query: (videoId: number) => `/like/length/${videoId}`,
    }),

    likeChange: builder.mutation<TSuccessRequest, number>({
      query: (videoId: number) => ({
        url: '/like/change',
        method: 'POST',
        body: { videoId },
      }),
      invalidatesTags: ['LIKE']
    }),
  }),
})
