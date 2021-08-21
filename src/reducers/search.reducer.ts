import { createSlice } from "@reduxjs/toolkit";


export interface SearchState {
    searching: boolean
    criteria: string
}

export const initialState: SearchState = {
    searching: false,
    criteria: ''
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
        }
    }
})

export const { update, hide, enable } = searchSlice.actions

export default searchSlice.reducer;
