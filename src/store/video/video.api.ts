import { createApi } from '@reduxjs/toolkit/dist/query/react'

import { TVideo, TVideoSorting } from '@/types/video.types'
import { baseQueryWithReAuth } from '@/store/queries/re-auth-query'
import { TSuccessRequest } from '@/types/request.types'

export const videoApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['COMMENT', 'LIKE', 'SUBSCRIPTION', 'VIDEO'],
  endpoints: (builder) => ({
    videoGetAll: builder.query<
      TVideo[],
      Partial<{ search: string; sort: TVideoSorting }>
    >({
      query: (params) => ({ url: '/video', params }),
      providesTags: ['VIDEO'],
    }),

    videoGetAllMy: builder.query<TVideo[], null>({
      query: () => '/video/get/my',
      providesTags: ['VIDEO'],
    }),

    videoGetOne: builder.query<TVideo, number>({
      query: (userId: number) => `/video/${userId}`,
      providesTags: ['VIDEO'],
    }),

    videoCreate: builder.mutation<{ videoId: number }, void>({
      query: () => ({
        url: '/video/create',
        method: 'POST',
      }),
      invalidatesTags: ['VIDEO'],
    }),

    videoAddView: builder.mutation<TSuccessRequest, number>({
      query: (videoId: number) => ({
        url: '/video/view',
        method: 'PATCH',
        body: { videoId },
        invalidatesTags: ['VIDEO'],
      }),
    }),

    videoRemove: builder.mutation<TSuccessRequest, number>({
      query: (videoId: number) => ({
        url: `/video/remove/${videoId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['VIDEO'],
    }),
  }),
})
