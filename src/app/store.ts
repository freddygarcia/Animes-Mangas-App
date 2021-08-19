import { configureStore } from '@reduxjs/toolkit'
import animeSlice from '../reducers/anime.reducers'

const store = configureStore({
    reducer: {
        animes: animeSlice
    }
});

export type RootState = ReturnType<typeof store.getState>
export default store;
