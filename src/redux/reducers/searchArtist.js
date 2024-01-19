import { GET_SEARCH_RESULTS } from "../actions"

const initialState = {
    results: null
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARCH_RESULTS:
            return {
                ...state,
                results: [action.payload]
            }
        default:
            return state;
    }
}

export default searchReducer;