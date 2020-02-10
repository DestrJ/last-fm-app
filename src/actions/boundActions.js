import axios from "axios";
import {
    getTracks,
    tracksLoading,
    setTracksCurrentPage,
    getTracksSearch,
    setTopTracksSearchString
} from "./topTracks";
import {
    artistLoading,
    getArtist
} from "./artist";
import {
    getTopTracksRequestString,
    getArtistRequestString,
    getTopTracksSearchRequestString
} from "../helper/apiHelper";

export const boundGetTracks = (page, limit) => dispatch => {
    dispatch(tracksLoading());

    axios.get(getTopTracksRequestString(page, limit))
        .then(res => dispatch(getTracks(res.data.tracks)));
};

export const boundGetSearchTracks = (page, searchTrack, limit) => dispatch => {
    dispatch(tracksLoading());

    axios.get(getTopTracksSearchRequestString(page, searchTrack, limit))
        .then(res => dispatch(getTracksSearch(res.data.results)));
};

export const boundSetTracksCurrentPage = page => dispatch => {
    dispatch(setTracksCurrentPage(page));
};

export const boundSetTopTracksSearchQuery = query => dispatch => {
    dispatch(setTopTracksSearchString(query));
};

export const boundGetArtist = name => dispatch => {
    dispatch(artistLoading());

    axios.get(getArtistRequestString(name))
        .then(res => dispatch(getArtist(res.data.artist)));
};