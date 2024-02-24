import { Mutex } from 'async-mutex'

import { authActions } from '@/store/auth/auth.slice'
import { AuthService } from '@/services/auth.service'

import { baseQuery } from './base-query'

import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query'

export const mutex = new Mutex()

export const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  object,
  FetchBaseQueryMeta
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()

  let result = await baseQuery(args, api, extraOptions)

  if (!result.error) return result

  const status = result.error.status

  if (status === 401) {
    if (mutex.isLocked()) {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }

    const release = await mutex.acquire()

    try {
      const refreshResult = await baseQuery(
        {
          url: `${process.env.APP_API}/api/auth/refresh`,
          credentials: 'include',
        },
        api,
        extraOptions
      )

      if (refreshResult.data) {
        api.dispatch(authActions.setAuthData(refreshResult.data))
        result = await baseQuery(args, api, extraOptions)
      } else {
        await AuthService.logout()
        window.location.href = '/'
      }
    } finally {
      release()
    }
  }

  if (status === 500) {
    console.log(result.error?.data)
  }

  return result
}
