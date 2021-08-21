import { createSlice } from '@reduxjs/toolkit'

import { Anime } from "../models/anime.model"

export interface AnimeState {
    loading: boolean
    error: boolean
    animes: Anime[]
    anime: Anime | null
}

export const initialState: AnimeState = {
    loading: false,
    error: false,
    anime: null,
    animes: [] as Anime[],
}


export const animeSlice = createSlice({
    name: 'anime',
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.animes = [];
        },
        saveAnime: (state, action) => {
            state.anime = new Anime(action.payload);
        },
        saveAnimes: (state, action) => {
            const newAnimes = action.payload.map(node => new Anime(node));

            state.animes =  newAnimes; // [...state.animes, ...newAnimes];
            state.loading = false;
            state.error = false;
        }
    }
})

export const { saveAnimes, saveAnime, reset } = animeSlice.actions

export default animeSlice.reducer;
