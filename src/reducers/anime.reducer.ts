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
    name: 'anime',
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.animes = [];
            state.endCursor = null;
            state.internalCursor = null;
        },
        loadMore: (state) => {
            state.endCursor = state.internalCursor;
        },
        saveAnime: (state, action) => {
            state.anime = new Anime(action.payload);
        },
        saveAnimes: (state, action) => {
            const payload: ApiResponse = action.payload;
            const newAnimes = payload.rows.nodes.map(node => new Anime(node));
            // const storedAnimes = state.animes.map(node => node instanceof Anime ? node : new Anime(node))

            state.animes = newAnimes; //  [...state.animes, ...payload.rows.nodes];
            state.endCursor = null;
            state.internalCursor = payload.rows.pageInfo.endCursor;
            state.loading = false;
            state.error = false;
        }
    }
})

export const { saveAnimes, loadMore, saveAnime, reset } = animeSlice.actions

export default animeSlice.reducer;
