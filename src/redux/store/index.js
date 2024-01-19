import { configureStore, combineReducers } from "@reduxjs/toolkit";
import likedReducer from "../reducers/liked";
import searchReducer from "../reducers/searchArtist";
import tracklistReducer from "../reducers/tracklist";
import currentAlbumReducer from "../reducers/currentAlbum";

const rootReducer = combineReducers({
    liked: likedReducer,
    search: searchReducer,
    tracklist: tracklistReducer,
    currentAlbum: currentAlbumReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store;