import {
  TAuthData,
  TLoginBody,
  TRegistrationBody,
  TEditBody,
} from '@/types/auth.types'
import { $axios } from '@/api/axios'
import { TSuccessRequest } from '@/types/request.types'

export const AuthService = {
  async edit(body: TEditBody) {
    return await $axios.patch<TAuthData>('/auth/edit', body)
  },

  async login(body: TLoginBody) {
    return await $axios.post<TAuthData>('/auth/login', body)
  },

  async logout() {
    return await $axios.post<TSuccessRequest>('/auth/logout')
  },

  async refresh() {
    return await $axios.get<TAuthData>('/auth/refresh')
  },

  async registration(body: TRegistrationBody) {
    return await $axios.post<TAuthData>('/auth/registration', body)
  },

  async remove(profileId: number) {
    return await $axios.delete(`/auth/remove/${profileId}`)
  },
}
