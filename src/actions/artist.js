import {ARTIST_LOADING, ARTIST_LOADED} from "./types";

export const artistLoading = () => ({
    type: ARTIST_LOADING
});

export const getArtist = artist => ({
    type: ARTIST_LOADED,
    payload: artist
});