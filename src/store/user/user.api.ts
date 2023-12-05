import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { IEditProfile, ISubscription, IUser } from '@/types/user.interface'

export const userApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_URL}/api`,
  }),
  tagTypes: ['User', 'Video', 'Comment'],
  endpoints: builder => ({
    getAllUsers: builder.query<IUser[], null>({
      query: () => '/user',
      providesTags: ['User'],
    }),

    getUserById: builder.query<IUser, number>({
      query: (userId: number) => `/user/login/${userId}`,
      providesTags: ['User'],
    }),

    editProfile: builder.mutation<IUser, IEditProfile>({
      query: body => ({
        url: '/user/edit',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['User'],
    }),

    createUser: builder.mutation<IUser, Partial<IUser>>({
      query: body => ({
        url: `/user/register`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),

    getAllSubscriptions: builder.query<IUser[], number>({
      query: (userId: number) => `/user/subscriptions/${userId}`,
      providesTags: ['User'],
    }),

    getSubscriptionById: builder.query<IUser, Partial<number>>({
      query: (userId: number) => `/user/subscription/${userId}`,
      providesTags: ['User'],
    }),

    checkSubscription: builder.query<boolean, ISubscription>({
      query: ({ userId, channelId }) =>
        `/user/subscriptions?userId=${userId}&channelId=${channelId}`,
      providesTags: ['User'],
    }),

    getSubscripionsLength: builder.query<number, number>({
      query: (userId: number) => `/user/subscriptions-length/${userId}`,
      providesTags: ['User'],
    }),

    addSubscription: builder.mutation<null, ISubscription>({
      query: body => ({
        url: '/user/subscription',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User', 'Video'],
    }),

    removeSubscription: builder.mutation<null, ISubscription>({
      query: body => ({
        url: '/user/subscription',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['User', 'Video'],
    }),
  }),
})
