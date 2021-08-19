import { createSlice } from '@reduxjs/toolkit'

import { Anime, ApiResponse } from "../models/anime.model"

export interface State {
    loading: boolean
    error: boolean
    animes: Anime[]
    anime: Anime | null
    internalCursor: string | null
    endCursor: string | null
}

export const initialState: State = {
    loading: false,
    error: false,
    anime: null,
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
        saveAnime: (state, action) => {
            state.anime = new Anime(action.payload);
        },
        saveAnimes: (state, action) => {
            const payload: ApiResponse = action.payload;
            const animes = payload.rows.nodes.map(node => new Anime(node));

            state.animes = [...state.animes, ...animes];
            state.endCursor = null;
            state.internalCursor = payload.rows.pageInfo.endCursor;
            state.loading = false;
            state.error = false;
        }
    }
})

export const { saveAnimes, loadMore, saveAnime } = animeSlice.actions

export default animeSlice.reducer;
