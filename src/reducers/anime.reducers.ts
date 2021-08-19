import { createSlice } from '@reduxjs/toolkit'

import { Anime } from "../models/anime.model"
import { ApiResponse } from "../models/api.response"

export interface State {
    loading: boolean
    error: boolean
    animes: Anime[]
    internalCursor: string | null
    endCursor: string | null
}

export const initialState: State = {
    loading: false,
    error: false,
    animes: [] as Anime[],
    internalCursor: null,
    endCursor: null,
}


export const animeSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        loadMore: (state) => {
            state.endCursor = state.internalCursor;
        },
        load: (state, action) => {
            const payload: ApiResponse = action.payload;
            state.animes = [...state.animes, ...payload.rows.nodes];
            state.endCursor = null;
            state.internalCursor = payload.rows.pageInfo.endCursor;
            state.loading = false;
            state.error = false;
        }
    }
})

export const { load, loadMore } = animeSlice.actions

export default animeSlice.reducer;
