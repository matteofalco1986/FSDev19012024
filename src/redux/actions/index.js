export const ADD_TO_LIKED = 'ADD_TO_LIKED'
export const REMOVE_FROM_LIKED = 'REMOVE_FROM_LIKED'
export const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS'
export const GET_ALBUM_TRACKLIST = 'GET_ALBUM_TRACKLIST'
export const GET_CURRENT_ALBUM = 'GET_CURRENT_ALBUM'

const baseEndpoint = 'https://deezerdevs-deezer.p.rapidapi.com/'
const albumEndpoint = 'https://cors-anywhere.herokuapp.com/http://api.deezer.com'
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '83ad2cb7a2msh577873a178d1b4cp1bd24bjsn31bf740783c2',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
};

export const addToLikedAction = (song) => ({
    type: ADD_TO_LIKED,
    payload: song,
})

export const removeFromLikedAction = (song) => ({
    type: REMOVE_FROM_LIKED,
    payload: song,
})

export const searchAction = (query) => {
    return async (dispatch) => {
        try {
            const res = await fetch(`${baseEndpoint}search?q=${query}`, options)
            if (!res.ok) {
                throw new Error('Network connection was not ok');
            }
            const data = await res.json()
            // console.log(data.data)
            dispatch({
                type: GET_SEARCH_RESULTS,
                payload: data.data,
            });
        } catch (err) {
            console.error('Error: ', err);
        };
    };
};

export const getAlbumTracklistAction = (query) => {
    return async (dispatch) => {
        try {
            const res = await fetch(`${albumEndpoint}/album/${query}/tracks`)
            if (!res.ok) {
                throw new Error('Network connection was not ok');
            }
            const data = await res.json()
            // console.log(data.data)
            dispatch({
                type: GET_ALBUM_TRACKLIST,
                payload: data.data,
            });
        } catch (err) {
            console.error('Error: ', err);
        };
    };
};

export const getCurrentAlbumAction = (query) => {
    return (dispatch) => {
        const data = query;
            dispatch({
                type: GET_CURRENT_ALBUM,
                payload: data,
            });
    };
};
