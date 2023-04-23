import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { API_URL } from '../../api/axios'
import { IUser } from '@/types/user.interface'

export const userApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL
	}),
	tagTypes: ['User', 'Video', 'Comment'],
	endpoints: builder => ({
		getAllUsers: builder.query<IUser[], any>({
			query: () => '/users',
			providesTags: [{ type: 'User' }]
		}),

		getUserById: builder.query<IUser, string>({
			query: (id: string) => `/users/${id}`,
			providesTags: [{ type: 'User' }]
		}),

		updateUser: builder.mutation<IUser, Partial<IUser> & Pick<IUser, 'id'>>({
			query: ({ id, ...body }) => ({
				url: `/users/${id}`,
				method: 'PUT',
				body
			}),
			invalidatesTags: [{ type: 'User' }]
		}),

		addUser: builder.mutation<IUser, Partial<IUser> & Pick<IUser, 'id'>>({
			query: ({ ...body }) => ({
				url: `/users`,
				method: 'POST',
				body
			}),
			invalidatesTags: [{ type: 'User' }]
		})
		
	})
})
