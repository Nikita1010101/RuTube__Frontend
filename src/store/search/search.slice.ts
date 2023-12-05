import { createSlice } from '@reduxjs/toolkit'

interface ISearch {
	searchValue: string
}

const initialState: ISearch = {
	searchValue: ''
}

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		changeSearchValue: (state, { payload }) => {
			state.searchValue = payload
		}
	}
})
