import React from "react";
import {Link} from "react-router-dom";

const Track = ({track}) => {

    let image = '';
    if (track.image.length) {
        const imageUrl = track.image[(track.image.length - 1)]['#text'];

        if ( imageUrl !== undefined ) {
            image = (<img src={imageUrl} alt={track.name} />);
        }
    }

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