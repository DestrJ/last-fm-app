import axios from "axios";
import {getTracks, tracksLoading, setTracksCurrentPage} from "./topTracks";
import {artistLoading, getArtist} from "./artist";
import {getTopTracksRequestString, getArtistRequestString} from "../helper/apiHelper";

export const boundGetTracks = (page, limit) => dispatch => {
    dispatch(tracksLoading());

    axios.get(getTopTracksRequestString(page, limit))
        // .then(res => console.log(res.data))
        .then(res => dispatch(getTracks(res.data.tracks)));
};

export const boundSetTracksCurrentPage = page => dispatch => {
    dispatch(setTracksCurrentPage(page));
};

export const boundGetArtist = name => dispatch => {
    dispatch(artistLoading());

    axios.get(getArtistRequestString(name))
        .then(res => getArtist(res.payload));
};