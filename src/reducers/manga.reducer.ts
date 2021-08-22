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
            const incoming = action.payload.map((node: any) => new Manga(node));
            state.mangas =  incoming; // [...state.animes, ...newAnimes];
        }
    }
})

export const { save, clear } = mangaSlice.actions

export default mangaSlice.reducer;
