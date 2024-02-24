import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.APP_API}/api`,
  credentials: 'include',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('accessToken')

    if (token) {
      headers.set('Content-Type', 'application/json')
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
})
