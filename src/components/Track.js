import React from "react";
import {Link} from "react-router-dom";
import {getImageFromArray} from "../helper/commonHelper";

const Track = ({track}) => {
    const image = getImageFromArray(track.image, track.name);
    const artistSlug = '/artist/' + track.artist.name.replace(/ /g, '+');

    return (
        <div className="track">
            {image}
            <h3 className="track__name">{track.name}</h3>
            <h4 className="track__artist-link">
                <Link to={artistSlug}>{track.artist.name}</Link>
            </h4>
            <h4 className="track__singer">
                <a href={track.artist.url}>
                    Last FM
                </a>
            </h4>
        </div>
    );
};

export default Track;