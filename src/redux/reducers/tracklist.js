import { GET_ALBUM_TRACKLIST } from "../actions"

const initialState = {
    results: null
}

const tracklistReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALBUM_TRACKLIST:
            return {
                ...state,
                results: [action.payload]
            }
        default:
            return state;
    }
}

export default tracklistReducer;