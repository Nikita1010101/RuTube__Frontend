import { ILikes, IVideo } from '@/types/video.interface'

import { userApi } from './user.api'

export const videoApi = userApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllVideos: builder.query<IVideo[], string | null>({
      query: (search: string | null) =>
        `/video${search ? '?search=' + search : ''}`,
      providesTags: ['Video'],
    }),

    getVideoById: builder.query<IVideo, number>({
      query: (userId: number) => `/video/${userId}`,
      providesTags: ['Video'],
    }),

    getSubsciptionVideos: builder.query<IVideo[], number>({
      query: (userId: number) => `/video/subscriptions/${userId}`,
      providesTags: ['Video'],
    }),

    getLikedVideos: builder.query<IVideo[], number>({
      query: (userId: number) => `/video/liked/${userId}`,
      providesTags: ['Video'],
    }),

    getVideoLikes: builder.query<ILikes[], number>({
      query: (videoId: number) => `/video/likes/${videoId}`,
      providesTags: ['Video'],
    }),

    getLikesLength: builder.query<number, number>({
      query: (videoId: number) => `/video/likes-length/${videoId}`,
      providesTags: ['Video'],
    }),

    checkLike: builder.query<boolean, ILikes>({
      query: ({ userId, videoId }) =>
        `/video/likes?userId=${userId}&videoId=${videoId}`,
      providesTags: ['Video'],
    }),

    addView: builder.mutation<null, { id: number }>({
      query: (body) => ({
        url: '/video/view',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Video'],
    }),

    addLike: builder.mutation<IVideo, ILikes>({
      query: (body) => ({
        url: '/video/like',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Video'],
    }),

    removeLike: builder.mutation<IVideo, ILikes>({
      query: (body) => ({
        url: `/video/like`,
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['Video'],
    }),
  }),
})
