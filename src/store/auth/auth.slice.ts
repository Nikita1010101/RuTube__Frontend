import { createSlice } from '@reduxjs/toolkit'

import { ACCESS_TOKEN } from '@/constants/token.constant'
import { interactWithLocalStorage } from '@/helpers/interact-with-local-storage'

import { login, logout, refresh, edit, remove } from './auth.action'
import { IAuthInitialState } from './auth.interface'

export const initialState: IAuthInitialState = {
  profile: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.profile = null
      interactWithLocalStorage(ACCESS_TOKEN, '')
    },
    setAuthData: (state, { payload }) => {
      state.profile = payload.user
      interactWithLocalStorage(ACCESS_TOKEN, payload.accessToken)
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(login.rejected, (state) => {
        state.profile = null
        interactWithLocalStorage(ACCESS_TOKEN, '')
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        if (payload) {
          state.profile = payload.user
          interactWithLocalStorage(ACCESS_TOKEN, payload.accessToken)
        }
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        if (payload) {
          state.profile = null
          interactWithLocalStorage(ACCESS_TOKEN, '')
        }
      })
      .addCase(refresh.rejected, (state) => {
        state.profile = null
        interactWithLocalStorage(ACCESS_TOKEN, '')
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        if (payload) {
          state.profile = payload.user
          interactWithLocalStorage(ACCESS_TOKEN, payload.accessToken)
        }
      })
      .addCase(edit.fulfilled, (state, { payload }) => {
        if (payload) {
          state.profile = payload.user
          interactWithLocalStorage(ACCESS_TOKEN, payload.accessToken)
        }
      })
      .addCase(remove.fulfilled, (state) => {
        state.profile = null
        interactWithLocalStorage(ACCESS_TOKEN, '')
      }),
})

export const authActions = authSlice.actions
