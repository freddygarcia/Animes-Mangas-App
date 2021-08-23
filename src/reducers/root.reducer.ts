import { combineReducers } from "@reduxjs/toolkit";
import animeSlice from "./anime.reducer";
import bookmarkSlice from "./bookmark.reducer";
import mangaSlice from "./manga.reducer";
import searchSlice from "./search.reducer";

const rootReducer = combineReducers({
    animes: animeSlice,
    mangas: mangaSlice,
    bookmark: bookmarkSlice,
    search: searchSlice
})

export default rootReducer