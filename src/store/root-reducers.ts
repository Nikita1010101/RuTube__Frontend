import { combineReducers } from 'redux'
import { userApi } from './api/user.api'

export const rootReducer = combineReducers({
	[userApi.reducerPath]: userApi.reducer
})
