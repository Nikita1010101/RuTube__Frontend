import { TUser } from '@/types/user.types'
import { videoApi } from '../video/video.api'
import { TVideo } from '@/types/video.types'

export const subscriptionApi = videoApi.injectEndpoints({
  endpoints: (builder) => ({
    subscriptionGetAll: builder.query<TUser[], null>({
      query: () => '/subscription',
      providesTags: ['SUBSCRIPTION'],
    }),

    subscriptionGetOne: builder.query<TUser, number>({
      query: (channelId: number) => `/subscription/${channelId}`,
      providesTags: ['SUBSCRIPTION'],
    }),

    subscriptionGetVideos: builder.query<TVideo[], null>({
      query: () => '/subscription/get/video',
      providesTags: ['SUBSCRIPTION'],
    }),

    subscriptionCheck: builder.query<{ isSubscription: boolean }, number>({
      query: (channelId: number) => `/subscription/check/${channelId}`,
      providesTags: ['SUBSCRIPTION']
    }),

    subscriptionGetLength: builder.query<{ length: number }, number>({
      query: (channelId: number) => `/subscription/length/${channelId}`,
      providesTags: ['SUBSCRIPTION']
    }),

    subscriptionChange: builder.mutation<TUser, number>({
      query: (channelId: number) => ({
        url: `/subscription/change`,
        method: 'POST',
        body: { channelId },
      }),
      invalidatesTags: ['SUBSCRIPTION'],
    }),
  }),
})
