import {TOP_TRACKS_LOADING, TOP_TRACKS_LOADED, SET_TRACKS_CURRENT_PAGE} from "../actions/types";

const initialState = {
    tracks: null,
    loading: false,
    page: 1,
    totalPage: 20
};

const topTracksReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOP_TRACKS_LOADING:
            return {
                ...state,
                loading: true
            };
        case TOP_TRACKS_LOADED:
            const totalPages = Number.parseInt(action.payload['@attr'].totalPages);
            return {
                ...state,
                loading: false,
                tracks: action.payload.track,
                totalPage: totalPages
            };
        case SET_TRACKS_CURRENT_PAGE:
            return {
                ...state,
                page: action.page
            };
        default:
            return state;
    }
};

export default topTracksReducer;