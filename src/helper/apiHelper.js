import { API_KEY, API_URL } from "../config/api";

export const getTopTracksRequestString = (page, limit) => {
    return `${API_URL}?method=chart.gettoptracks&page=${page}&limit=${limit}&api_key=${API_KEY}&format=json`;
};

export const getArtistRequestString = (name) => {
    return `${API_URL}?method=artist.getinfo&artist=${name}&api_key=${API_KEY}&format=json`;
};