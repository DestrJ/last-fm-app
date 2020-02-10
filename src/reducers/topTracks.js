import {
    TOP_TRACKS_LOADING,
    TOP_TRACKS_LOADED,
    SET_TRACKS_CURRENT_PAGE,
    TOP_TRACKS_SEARCH_LOADED,
    SET_TOP_TRACKS_SEARCH_STRING
} from "../actions/types";
import {
    TOP_TRACKS_LISTING_LIMIT,
    MAX_TOTAL_PAGES,
    MAX_TOTAL_PAGES_DEFAULT
} from "../config/api";

const initialState = {
    tracks: null,
    loading: false,
    page: 1,
    totalPage: 20,
    searchQuery: ''
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
        case TOP_TRACKS_SEARCH_LOADED:
            const totalSearchResults = action.payload['opensearch:totalResults'];
            const totalSearchPage = MAX_TOTAL_PAGES ? MAX_TOTAL_PAGES : Math.floor(totalSearchResults / TOP_TRACKS_LISTING_LIMIT);
            const searchTracks = action.payload.trackmatches.track.length > TOP_TRACKS_LISTING_LIMIT ?
                action.payload.trackmatches.track.slice(0, TOP_TRACKS_LISTING_LIMIT ): action.payload.trackmatches.track;
            return {
                ...state,
                loading: false,
                tracks: searchTracks,
                totalPage: totalSearchPage
            };
        case SET_TOP_TRACKS_SEARCH_STRING:
            return {
                ...state,
                searchQuery: action.searchQuery
            };
        default:
            return state;
    }
};

export default topTracksReducer;