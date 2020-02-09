import {combineReducers} from "redux";
import topTracksReducer from "./topTracks";
import artistReducer from "./artist";

export default combineReducers({
    toptracks: topTracksReducer,
    artist: artistReducer
});