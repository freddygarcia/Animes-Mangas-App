import { createSlice } from "@reduxjs/toolkit";


export interface SearchState {
    searching: boolean
    criteria: string

    internalCursor: string | null
    endCursor: string | null
}

export const initialState: SearchState = {
    searching: false,
    criteria: '',
    internalCursor: null,
    endCursor: null,
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
        saveCursor: (state, action) => {
            state.endCursor = null;
            state.internalCursor = action.payload.rows.pageInfo.endCursor;
        },
        loadMore: (state) => {
            state.endCursor = state.internalCursor;
        }
    }
})

export const { update, hide, enable, saveCursor, loadMore } = searchSlice.actions

export default searchSlice.reducer;
