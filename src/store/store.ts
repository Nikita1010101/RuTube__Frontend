import { configureStore } from '@reduxjs/toolkit'
import { userApi } from './api/user.api'
import { rootReducer } from './root-reducers'

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(userApi.middleware)
})

export type TypeSelectorHook = ReturnType<typeof store.getState>
