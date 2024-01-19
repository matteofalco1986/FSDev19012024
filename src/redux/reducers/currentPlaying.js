import { GET_CURRENT_PLAYING } from "../actions"

const initialState = {
    results: null
}

const currentPlayingReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENT_PLAYING:
            return {
                ...state,
                results: [action.payload]
            }
        default:
            return state;
    }
}

export default currentPlayingReducer;