import { combineReducers } from 'redux'

import { searchSlice } from './search/search.slice'
import { authSlice } from './auth/auth.slice'
import { videoApi } from './video/video.api'

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  search: searchSlice.reducer,
  [videoApi.reducerPath]: videoApi.reducer,
})
