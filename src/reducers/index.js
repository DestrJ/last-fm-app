import {combineReducers} from "redux";
import topTracksReducer from "./topTracks";

export default combineReducers({
    toptracks: topTracksReducer
});