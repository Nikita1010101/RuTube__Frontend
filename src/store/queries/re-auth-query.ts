import { Mutex } from 'async-mutex'

import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query'

import { actions } from '@/store/auth/auth.slice'
import { baseQuery } from './base-query'

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

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
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
          api.dispatch(actions.setAuthData(refreshResult.data))

          result = await baseQuery(args, api, extraOptions)
        } else {
          api.dispatch(actions.logout())
          window.location.href = '/'
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()

      result = await baseQuery(args, api, extraOptions)
    }
  }

  if (result.error && result.error.status === 500) {
    alert('ОШИБКА С ДАННЫМИ НА СЕРВЕРЕ!!!!!')
  }

  return result
}
