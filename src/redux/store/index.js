import { configureStore, combineReducers } from "@reduxjs/toolkit";
import likedReducer from "../reducers/liked";

const rootReducer = combineReducers({
    liked: likedReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store;