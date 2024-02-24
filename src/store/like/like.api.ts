import { TVideo } from '@/types/video.types'
import { videoApi } from '@/store/video/video.api'
import { TSuccessRequest } from '@/types/request.types'

export const likeApi = videoApi.injectEndpoints({
  endpoints: (builder) => ({
    likeGetVideos: builder.query<TVideo[], null>({
      query: () => '/like/video',
      providesTags: ['LIKE'],
    }),

    likeCheck: builder.query<{ isLike: boolean }, number>({
      query: (videoId: number) => `/like/check/${videoId}`,
      providesTags: ['LIKE'],
    }),

    likeGetLength: builder.query<{ length: number }, number>({
      query: (videoId: number) => `/like/length/${videoId}`,
      providesTags: ['LIKE'],
    }),

    likeUpdate: builder.mutation<TSuccessRequest, number>({
      query: (videoId: number) => ({
        url: '/like/change',
        method: 'POST',
        body: { videoId },
      }),
      invalidatesTags: ['LIKE'],
    }),
  }),
})
