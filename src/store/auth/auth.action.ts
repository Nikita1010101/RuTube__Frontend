import { createAsyncThunk } from '@reduxjs/toolkit'

import { AuthService } from '@/services/auth.service'
import { TLoginBody, TRegistrationBody } from '@/types/auth.types'
import { TEditBody } from '@/types/auth.types'

export const edit = createAsyncThunk(
  'auth/edit',
  async (body: TEditBody, thunkAPI) => {
    try {
      const { data: profile } = await AuthService.edit(body)
      return profile
    } catch (error) {
      thunkAPI.rejectWithValue(error)
    }
  }
)

export const login = createAsyncThunk(
  'auth/login',
  async (body: TLoginBody, thunkAPI) => {
    try {
      const { data } = await AuthService.login(body)
      return data
    } catch (error) {
      thunkAPI.rejectWithValue(error)
    }
  }
)

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await AuthService.logout()
    return true
  } catch (error) {
    thunkAPI.rejectWithValue(error)
  }
})

export const registration = createAsyncThunk(
  'auth/registration',
  async (body: TRegistrationBody, thunkAPI) => {
    try {
      await AuthService.registration(body)
      return true
    } catch (error) {
      thunkAPI.rejectWithValue(error)
    }
  }
)

export const remove = createAsyncThunk(
  'auth/remove',
  async (profileId: number, thunkAPI) => {
    try {
      const { data } = await AuthService.remove(profileId)
      return data
    } catch (error) {
      thunkAPI.rejectWithValue(error)
    }
  }
)

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  try {
    const { data } = await AuthService.refresh()
    return data
  } catch (error) {
    thunkAPI.rejectWithValue(error)
  }
})
