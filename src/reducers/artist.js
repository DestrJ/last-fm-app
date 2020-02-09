import {ARTIST_LOADING, ARTIST_LOADED} from "../actions/types";

const initialState = {
    loading: false,
    artist: null
};

const artistReducer = (state = initialState, action) => {
    switch (action.type) {
        case ARTIST_LOADING:
            return {
                ...state,
                loading: true
            };
        case ARTIST_LOADED:
            // console.log(action.payload);
            return {
                ...state,
                artist: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default artistReducer;