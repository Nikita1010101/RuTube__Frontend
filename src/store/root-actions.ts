import * as authActions from '@/store/auth/auth.action'
import { searchSlice } from './search/search.slice'

export const rootActions = {
  ...authActions,
  ...searchSlice.actions,
}
