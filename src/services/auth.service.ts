import axios, { Axios, AxiosResponse } from 'axios'

import {
  TAuthData,
  TEditBody,
  TLoginBody,
  TRegistrationBody,
} from '@/types/auth.types'
import { $axios } from '@/api/axios'

export const AuthService = {
  async registration(body: TRegistrationBody) {
    const { data } = await $axios.post<
      AxiosResponse<TAuthData, TRegistrationBody>
    >('/auth/registration', body, {
      withCredentials: true,
    })
    return data
  },

  async refresh() {
    return await $axios.get<TAuthData>(
      '/auth/refresh',
      {
        withCredentials: true,
      }
    )
  },

  async login(body: TLoginBody) {
    return await $axios.post<TAuthData, AxiosResponse<TAuthData, TLoginBody>>(
      '/auth/login',
      body,
      {
        withCredentials: true,
      }
    )
  },

  async logout() {
    return await axios.post(`${process.env.APP_API}/api/auth/logout`, {
      withCredentials: true,
    })
  },

  async edit(body: TEditBody) {
    return await axios.patch(`${process.env.APP_API}/api/auth/edit`, body, {
      withCredentials: true,
    })
  },

  async remove(profileId: number) {
    return await axios.delete(
      `${process.env.APP_API}/api/auth/remove/${profileId}`,
      {
        withCredentials: true,
      }
    )
  },
}
