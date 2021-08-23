import { createSlice } from '@reduxjs/toolkit'

import { Manga } from "../models/manga.model"

export interface MangaState {
    mangas: Manga[]
    endCursor: string | null
}

export const initialState: MangaState = {
    mangas: [] as Manga[],
    endCursor: null
}

export const mangaSlice = createSlice({
    name: 'manga',
    initialState: initialState,
    reducers: {
        clear: (state) => {
            state.mangas = [];
        },
        save: (state, action) => {
            state.endCursor = action.payload.rows.pageInfo.endCursor;
            state.mangas = action.payload.rows.nodes;
        },
        append: (state, action) => {
            state.endCursor = action.payload.rows.pageInfo.endCursor;
            state.mangas = [...state.mangas, ...action.payload.rows.nodes];
        }
    }
})

export const { save, clear, append } = mangaSlice.actions

export default mangaSlice.reducer;
