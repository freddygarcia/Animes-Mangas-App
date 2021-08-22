import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import animeSlice from '../reducers/anime.reducer'
import mangaSlice from '../reducers/manga.reducer';
import searchSlice from '../reducers/search.reducer';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist : ['animes', 'mangas']
};

export const store = configureStore({
    reducer: {
        animes: persistReducer(persistConfig, animeSlice),
        mangas: persistReducer(persistConfig, mangaSlice),
        search: searchSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;