import { API_KEY, API_URL, TOP_TRACKS_LISTING_LIMIT } from "../config/api";

export const getTopTracksRequestString = (page, limit = TOP_TRACKS_LISTING_LIMIT) => {
    return `${API_URL}?method=chart.gettoptracks&page=${page}&limit=${limit}&api_key=${API_KEY}&format=json`;
};

export const getTopTracksSearchRequestString = (page, searchTrack, limit = TOP_TRACKS_LISTING_LIMIT) => {
    return `${API_URL}?method=track.search&page=${page}&limit=${limit}&track=${searchTrack}&api_key=${API_KEY}&format=json`;
};
//track=Believe&api_key=5b4fb9f3d727b2d7e8003866267e863a&format=json
export const getArtistRequestString = (name) => {
    return `${API_URL}?method=artist.getinfo&artist=${name}&api_key=${API_KEY}&format=json`;
};