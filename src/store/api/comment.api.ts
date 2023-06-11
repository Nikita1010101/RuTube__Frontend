import { IComment } from '@/types/comment.interface'

import { userApi } from './user.api'

export const commentApi = userApi.injectEndpoints({
	endpoints: builder => ({
		getCommentsById: builder.query<IComment[], number>({
			query: (videoId: number) => `/comment/${videoId}`,
			providesTags: ['Comment']
		}),

		createComment: builder.mutation<null, IComment>({
			query: body => ({
				url: '/comment',
				method: 'POST',
				body
			}),
			invalidatesTags: ['Video', 'Comment']
		}),

		removeComment: builder.mutation<null, IComment>({
			query: body => ({
				url: `/comment`,
				method: 'DELETE',
				body
			}),

			invalidatesTags: ['Video', 'Comment']
		})
	})
})
