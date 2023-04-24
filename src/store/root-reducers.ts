import { combineReducers } from 'redux'
import { userApi } from './api/user.api'
import { searchSlice } from './slices/search/search.slice'

export const rootReducer = combineReducers({
	search: searchSlice.reducer,
	[userApi.reducerPath]: userApi.reducer
})
