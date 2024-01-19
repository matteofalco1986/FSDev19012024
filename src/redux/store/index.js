import { configureStore, combineReducers } from "@reduxjs/toolkit";
import likedReducer from "../reducers/liked";
import searchReducer from "../reducers/searchArtist";
import tracklistReducer from "../reducers/tracklist";

const rootReducer = combineReducers({
    liked: likedReducer,
    search: searchReducer,
    tracklist: tracklistReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store;