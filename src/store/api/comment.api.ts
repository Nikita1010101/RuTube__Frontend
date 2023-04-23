import { userApi } from './user.api'
import { IComment } from '@/types/comment.interface'

export const commentApi = userApi.injectEndpoints({
	endpoints: builder => ({
		getCommentById: builder.query<IComment[], any>({
			query: id => `/comments/${id}`,
			providesTags: [{ type: 'Comment' }]
		}),

		addComment: builder.mutation<
			IComment,
			Partial<IComment> & Pick<IComment, 'id'>
		>({
			query: ({ ...body }) => ({
				url: '/comments',
				method: 'POST',
				body
			}),
			invalidatesTags: [{ type: 'Comment' }]
		}),

		editComment: builder.mutation<
			IComment,
			Partial<IComment> & Pick<IComment, 'id'>
		>({
			query: ({ id, ...body }) => ({
				url: `/comments/${id}`,
				method: 'PUT',
				body
			}),

			invalidatesTags: [{ type: 'Comment' }]
		})
    
	})
})
