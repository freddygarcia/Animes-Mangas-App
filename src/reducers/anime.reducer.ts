import { createSlice } from '@reduxjs/toolkit'

import { Anime } from "../models/anime.model"

export interface AnimeState {
    animes: Anime[]
}

export const initialState: AnimeState = {
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
            const incoming = action.payload.map((node: any) => new Anime(node));
            state.animes = [...state.animes, ...incoming];
        }
    }
})

export const { save, clear } = animeSlice.actions

export default animeSlice.reducer;
