import {TOP_TRACKS_LOADING, TOP_TRACKS_LOADED, SET_TRACKS_CURRENT_PAGE} from "../actions/types";
import {TOP_TRACKS_LISTING_LIMIT, MAX_TOTAL_PAGES, MAX_TOTAL_PAGES_DEFAULT} from "../config/api";

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
            let totalPages = MAX_TOTAL_PAGES ? MAX_TOTAL_PAGES : MAX_TOTAL_PAGES_DEFAULT;
            if ( action.payload['@attr'] && action.payload['@attr'].totalPages ) {
                totalPages = MAX_TOTAL_PAGES ? MAX_TOTAL_PAGES : Number.parseInt(action.payload['@attr'].totalPages);
            }
            const tracks = action.payload.track.length > TOP_TRACKS_LISTING_LIMIT ?
                action.payload.track.slice(0, TOP_TRACKS_LISTING_LIMIT ) : action.payload.track;
            return {
                ...state,
                loading: false,
                tracks: tracks,
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