import React from "react";
import {Link} from "react-router-dom";
import {getImageFromArray} from "../helper/commonHelper";

const Track = ({trackName, artistName, trackImage, lastFmUrl}) => {
    const image = getImageFromArray(trackImage, trackName);
    let artistHtml = '';
    if ( artistName ) {
        const artistSlug = '/artist/' + artistName.replace(/ /g, '+');
        artistHtml = (
            <h4 className="track__artist-link">
                <Link to={artistSlug}>{artistName}</Link>
            </h4>
        );
    }

    return (
        <div className="track">
            {image}
            <h3 className="track__name">{trackName}</h3>
            {artistHtml}
            <h4 className="track__last-fm-link">
                <a href={lastFmUrl}>
                    Last FM
                </a>
            </h4>
        </div>
    );
};

export default Track;