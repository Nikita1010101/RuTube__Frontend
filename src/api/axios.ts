import axios from 'axios'

import { AuthService } from '@/services/auth.service'
import { interactWithLocalStorage } from '@/helpers/interact-with-local-storage'
import { ACCESS_TOKEN } from '@/constants/token.constant'
import { authActions } from '@/store/auth/auth.slice'

import { getAxiosParams } from './api.helper'

export const $axios = axios.create({
  baseURL: `${process.env.APP_API}/api`,
  ...getAxiosParams,
})

$axios.interceptors.request.use((req) => {
  req.headers.Authorization = `Bearer ${interactWithLocalStorage(ACCESS_TOKEN)}`
  return req
})

// $axios.interceptors.response.use(
//   (res) => res,
//   async (error) => {
//     const originalRequest = error.config

//     const status = error.response?.status

//     if (!status || !error.config || error.config._isRetry) return error

//     if (status === 401) {
//       error.config._isRetry = true

//       try {
//         const { data } = await AuthService.refresh()
//         if (!data.accessToken) return error

//         interactWithLocalStorage(ACCESS_TOKEN, data.accessToken)
//         authActions.setAuthData(data)

//         return $axios.request(originalRequest)
//       } catch (error) {
//         await AuthService.logout()
//         window.location.href = '/'
//       }
//     }

//     if (status === 500) {
//       alert('Server Data Error!!!')
//     }

//     return error
//   }
// )
