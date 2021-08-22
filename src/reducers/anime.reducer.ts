import { createSlice } from '@reduxjs/toolkit'

import { Anime } from "../models/anime.model"

export interface AnimeState {
    animes: Anime[]
    endCursor: string | null
}

export const initialState: AnimeState =  {
    animes: [] as Anime[],
    endCursor: null
}

export const animeSlice = createSlice({
    name: 'anime',
    initialState: initialState,
    reducers: {
        clear: (state) => {
            state.animes = [];
            state.endCursor = null;
        },
        save: (state, action) => {
            state.endCursor = action.payload.rows.endCursor;
            state.animes = action.payload.rows.nodes;
        },
        append: (state, action) => {
            state.endCursor = action.payload.rows.pageInfo.endCursor;
            state.animes = [...state.animes, ...action.payload.rows.nodes];
        }
    }
})

export const { append, save } = animeSlice.actions

export default animeSlice.reducer;
