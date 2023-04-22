import { IVideo } from '@/types/video.interface'
import { userApi } from './user.api'

export const videoApi = userApi.injectEndpoints({
	endpoints: builder => ({
		getAllVideos: builder.query<IVideo[], any>({
			query: () => '/videos',
			providesTags: [{ type: 'Video' }]
		}),
		getVideoById: builder.query<IVideo, any>({
			query: (id: string) => `/videos/${id}`,
			providesTags: [{ type: 'Video' }]
		}),
		updateVideo: builder.mutation<IVideo, Partial<IVideo> & Pick<IVideo, 'id'>>(
			{
				query: ({ id, ...body }) => ({
					url: `/videos/${id}`,
					method: 'PUT',
					body
				}),
				invalidatesTags: [{ type: 'Video' }]
			}
		)
	})
})
