import { createSlice } from '@reduxjs/toolkit'

import { Anime } from "../models/anime.model"

export interface AnimeState {
    animes: Anime[]
}

export const initialState: AnimeState =  {
    animes: [] as Anime[],
}

export const animeSlice = createSlice({
    name: 'anime',
    initialState: initialState,
    reducers: {
        clear: (state) => {
            state.animes = [];
        },
        save: (state, action) => {
            state.animes = [...state.animes, ...action.payload];
        }
    }
})

export const { save } = animeSlice.actions

export default animeSlice.reducer;
