import { configureStore, combineReducers } from "@reduxjs/toolkit";
import likedReducer from "../reducers/liked";
import searchReducer from "../reducers/searchArtist";
import tracklistReducer from "../reducers/tracklist";
import currentAlbumReducer from "../reducers/currentAlbum";
import currentPlayingReducer from "../reducers/currentPlaying";

const rootReducer = combineReducers({
    liked: likedReducer,
    search: searchReducer,
    tracklist: tracklistReducer,
    currentAlbum: currentAlbumReducer,
    currentPlaying: currentPlayingReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store;