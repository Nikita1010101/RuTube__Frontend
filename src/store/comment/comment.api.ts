import { TComment } from '@/types/comment.types'
import { videoApi } from '@/store/video/video.api'

export const commentApi = videoApi.injectEndpoints({
  endpoints: (builder) => ({
    commentGetAll: builder.query<TComment[], number>({
      query: (videoId: number) => `/comment/${videoId}`,
      providesTags: ['COMMENT'],
    }),

    commentAdd: builder.mutation<null, TComment>({
      query: (body) => ({
        url: '/comment/add',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['COMMENT'],
    }),

    commentEdit: builder.mutation<null, TComment>({
      query: (body) => ({
        url: `/comment/edit`,
        method: 'PATCH',
        body,
      }),

      invalidatesTags: ['COMMENT'],
    }),

    commentRemove: builder.mutation<null, TComment>({
      query: (commentId) => ({
        url: `/comment/remove/${commentId}`,
        method: 'DELETE',
      }),

      invalidatesTags: ['COMMENT'],
    }),
  }),
})
