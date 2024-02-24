import { createApi } from '@reduxjs/toolkit/dist/query/react'

import { TVideo, TVideoSorting } from '@/types/video.types'
import { baseQueryWithReAuth } from '@/store/queries/re-auth-query'
import { TSuccessRequest } from '@/types/request.types'

export const videoApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['COMMENT', 'LIKE', 'SUBSCRIPTION', 'USER', 'VIDEO'],
  endpoints: (builder) => ({
    videoGetAll: builder.query<
      TVideo[],
      Partial<{ search: string; sort: TVideoSorting }> | null
    >({
      query: (params) => {
        const search = params?.search
        const sort = params?.sort

        let basePath = '/video?'

        if (search) basePath += `_search=${search}`
        if (sort) basePath += `_sort=${sort}`

        return basePath
      },
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

    videoCreate: builder.mutation<number, null>({
      query: () => ({
        url: '/video/create',
        method: 'POST',
      }),
    }),

    videoUpdateContent: builder.mutation<null, FormData>({
      query: (body) => ({
        url: '/video/update/content',
        method: 'PATCH',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body,
      }),
    }),

    videoAddView: builder.mutation<TSuccessRequest, number>({
      query: (videoId: number) => ({
        url: '/video/view',
        method: 'PATCH',
        body: { videoId },
      }),
    }),

    videoRemove: builder.mutation<TSuccessRequest, number>({
      query: (videoId: number) => ({
        url: '/video/remove',
        method: 'DELETE',
        body: { videoId },
      }),
    }),
  }),
})
