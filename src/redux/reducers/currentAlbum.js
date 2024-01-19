import { GET_CURRENT_ALBUM } from "../actions"

const initialState = {
    results: null
}

const currentAlbumReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENT_ALBUM:
            return {
                ...state,
                results: [action.payload]
            }
        default:
            return state;
    }
}

export default currentAlbumReducer;