import { AxiosResponse } from 'axios'

import { $axios } from '@/api/axios'
import { TLoginBody, TRegistrationBody } from '@/types/auth.type'
import { IUser } from '@/types/user.interface'

export const AuthService = {
  async registration(body: TRegistrationBody) {
    return await $axios.post<AxiosResponse<IUser>>('/auth/registration', body, {
      withCredentials: true,
    })
  },

  async login(body: TLoginBody) {
    return await $axios.post<AxiosResponse<IUser>>('/auth/login', body, { withCredentials: true })
  },

  async logout() {
    return await $axios.delete<AxiosResponse<boolean>>('/auth/logout', { withCredentials: true })
  },

  async activate(password: string) {
    return await $axios.post<AxiosResponse<boolean>>(
      '/auth/activate',
      { password },
      { withCredentials: true }
    )
  },
}

enum Edfj {
  auth = 'adfasdf'
}

