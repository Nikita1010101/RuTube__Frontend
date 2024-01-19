import { createSlice } from '@reduxjs/toolkit'

import { ISearchInitialState } from './search.interface'

const initialState: ISearchInitialState = {
  searchValue: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearchValue: (state, { payload }) => {
      state.searchValue = payload
    },
  },
})
