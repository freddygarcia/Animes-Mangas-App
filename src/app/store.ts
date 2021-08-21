import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import animeSlice from '../reducers/anime.reducer'
import searchSlice from '../reducers/search.reducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};

export const store = configureStore({
    reducer: {
        animes: persistReducer(persistConfig, animeSlice),
        search: searchSlice
    },
    middleware: [thunk]
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;