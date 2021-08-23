import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from '../reducers/root.reducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['animes','mangas','bookmark']
};

const persistedReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducers,
    middleware: [thunk]
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;