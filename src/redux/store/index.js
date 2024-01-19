import { configureStore, combineReducers } from "@reduxjs/toolkit";
import likedReducer from "../reducers/liked";
import searchReducer from "../reducers/searchArtist";

const rootReducer = combineReducers({
    liked: likedReducer,
    search: searchReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store;