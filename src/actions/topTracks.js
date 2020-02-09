import {TOP_TRACKS_LOADING, TOP_TRACKS_LOADED, SET_TRACKS_CURRENT_PAGE, TOP_TRACKS_SEARCH_LOADED} from "./types";

export const tracksLoading = () => ({
    type: TOP_TRACKS_LOADING
});

export const getTracks = tracks => ({
    type: TOP_TRACKS_LOADED,
    payload: tracks
});

export const setTracksCurrentPage = page => ({
    type: SET_TRACKS_CURRENT_PAGE,
    page: page
});

export const getTracksSearch = tracks => ({
    type: TOP_TRACKS_SEARCH_LOADED,
    payload: tracks
});