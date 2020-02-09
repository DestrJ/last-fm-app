import React from "react";
import {Link} from "react-router-dom";
import {getImageFromArray} from "../helper/commonHelper";

const Track = ({track}) => {
    const image = getImageFromArray(track.image, track.name);
    const artistSlug = '/artist/' + track.artist.name.replace(/ /g, '+');

    return (
        <div className="track">
            {image}
            <h4 className="track__name">{track.name}</h4>
            <h6 className="track__artist-link">
                <Link to={artistSlug}>{track.artist.name}</Link>
            </h6>
            <h6 className="track__singer">
                <a href={track.artist.url}>
                    Last FM
                </a>
            </h6>
        </div>
    );
};

export default Track;