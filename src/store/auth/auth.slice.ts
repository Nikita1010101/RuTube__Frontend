import { createSlice } from '@reduxjs/toolkit'

import { IAuthInitialState } from './auth.interface'
import { login, refresh } from './auth.action'
import { TAuthData } from '@/types/auth.types'

export const initialState: IAuthInitialState = {
  profile: null,
  accessToken: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = ''
      state.profile = null
    },
    setAuthData: (state, { payload }) => {
      state.accessToken = payload.accessToken
      state.profile = payload.user
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(refresh.rejected, (state) => {
        state.accessToken = ''
        state.profile = null
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        if (payload) {
          state.accessToken = payload.accessToken
          state.profile = payload.user
        }
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        if (payload) {
          state.accessToken = payload.accessToken
          state.profile = payload.user
        }
      })
      .addCase(login.rejected, (state) => {
        state.accessToken = ''
        state.profile = null
      }),
})

export const actions = authSlice.actions
