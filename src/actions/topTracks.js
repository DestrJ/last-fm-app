import {TOP_TRACKS_LOADING, TOP_TRACKS_LOADED} from "./types";

export const tracksLoading = () => ({
    type: TOP_TRACKS_LOADING
});

export const getTracks = tracks => ({
    type: TOP_TRACKS_LOADED,
    payload: tracks
});