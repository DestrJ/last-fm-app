import axios from "axios";
import {getTracks, tracksLoading} from "./topTracks";
import {artistLoading, getArtist} from "./artist";
import {getTopTracksRequestString, getArtistRequestString} from "../helper/apiHelper";

export const boundGetTracks = (page, limit) => dispatch => {
    dispatch(tracksLoading());

    axios.get(getTopTracksRequestString(page, limit))
        .then(res => getTracks(res.payload));
};

export const boundGetArtist = name => dispatch => {
    dispatch(artistLoading());

    axios.get(getArtistRequestString(name))
        .then(res => getArtist(res.payload));
};
