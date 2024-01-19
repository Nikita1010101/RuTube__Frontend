import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from './root-reducers'
import { videoApi } from './video/video.api'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(videoApi.middleware),
})

export type TypeSelectorHook = ReturnType<typeof store.getState>
