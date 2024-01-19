import { fetchBaseQuery } from "@reduxjs/toolkit/query"

import { TypeSelectorHook } from "../store"

export const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.APP_API}/api`,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as TypeSelectorHook

    const token = state.auth.accessToken

    if (token) {
      headers.set('Content-Type', 'application/json')
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
})