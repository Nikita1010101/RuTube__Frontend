import { createAsyncThunk } from '@reduxjs/toolkit'

import { AuthService } from '@/services/auth.service'
import { TLoginBody, TRegistrationBody } from '@/types/auth.type'

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

export const login = createAsyncThunk('auth/login', async (body: TLoginBody, thunkAPI) => {
  try {
    const { data: profile } = await AuthService.login(body)
    return profile
  } catch (error) {
    thunkAPI.rejectWithValue(error)
  }
})

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await AuthService.logout()
    return true
  } catch (error) {
    thunkAPI.rejectWithValue(error)
  }
})

export const activate = createAsyncThunk('auth/logout', async (password: string, thunkAPI) => {
  try {
    const { data: profile } = await AuthService.activate(password)
    return profile
  } catch (error) {
    thunkAPI.rejectWithValue(error)
  }
})

export const edit = createAsyncThunk('auth/registration', async (body: IEditBody, thunkAPI) => {
  try {
    const { data: profile } = await AuthService.edit(body)
    return profile
  } catch (error) {
    thunkAPI.rejectWithValue(error)
  }
})

export const remove = createAsyncThunk('auth/registration', async (_, thunkAPI) => {
  try {
    const { data: profile } = await AuthService.remove()
    return profile
  } catch (error) {
    thunkAPI.rejectWithValue(error)
  }
})
