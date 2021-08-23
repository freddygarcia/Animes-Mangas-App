import { createSlice } from "@reduxjs/toolkit";


export interface SearchState {
    searching: boolean
    criteria: string
    loadingMore: boolean
}

export const initialState: SearchState = {
    searching: false,
    criteria: '',
    loadingMore: false,
}

export const searchSlice = createSlice({
    name: 'search',
    initialState: initialState,
    reducers: {
        enable: (state) => {
            state.searching = true
        },
        hide: (state) => {
            state.searching = false
            state.criteria = ''
        },
        update: (state, action) => {
            state.criteria = action.payload
        },
        cancelLoadMore : (state) => {
            state.loadingMore = false
        },
        loadMore: (state) => {
            state.loadingMore = true;
        }
    }
})

export const { update, hide, enable, loadMore, cancelLoadMore } = searchSlice.actions

export default searchSlice.reducer;
