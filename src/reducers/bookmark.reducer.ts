import { createSlice, current } from '@reduxjs/toolkit'
import { act } from 'react-test-renderer';

import { Anime } from '../models/anime.model';
import { Manga } from '../models/manga.model';

export interface BookmarkState {
    animes : {
        [id: string] : Anime
    }
    mangas : {
        [id: string] : Manga
    }
}

export const initialState: BookmarkState =  {
    animes : {} as { id : Anime },
    mangas : {} as { id : Manga }
}

export const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState: initialState,
    reducers: {
        deleteAnime: (state, action) => {
            const id = action.payload;
            delete state.animes[id];
        },
        deleteManga: (state, action) => {
            const id = action.payload;
            delete state.mangas[id];
        },
        saveAnime: (state, action) => {
            const anime = action.payload as Anime
            state.animes[anime.id] = anime;
        },
        saveManga: (state, action) => {
            const manga = action.payload as Manga
            state.mangas[manga.id] = manga;
        },
    }
})

export const { deleteAnime, deleteManga, saveAnime, saveManga } = bookmarkSlice.actions

export default bookmarkSlice.reducer;
