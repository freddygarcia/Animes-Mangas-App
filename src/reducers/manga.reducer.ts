import { createSlice } from '@reduxjs/toolkit'

import { Manga } from "../models/manga.model"

export interface MangaState {
    mangas: Manga[]
}

export const initialState: MangaState = {
    mangas: [] as Manga[],
}

export const mangaSlice = createSlice({
    name: 'manga',
    initialState: initialState,
    reducers: {
        clear: (state) => {
            state.mangas = [];
        },
        save: (state, action) => {
            state.mangas = [...state.mangas, ...action.payload];
        }
    }
})

export const { save, clear } = mangaSlice.actions

export default mangaSlice.reducer;
