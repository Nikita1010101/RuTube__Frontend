import { combineReducers } from 'redux'
import { userApi } from './user/user.api'
import { searchSlice } from './search/search.slice'

export const rootReducer = combineReducers({
	search: searchSlice.reducer,
	[userApi.reducerPath]: userApi.reducer
})
