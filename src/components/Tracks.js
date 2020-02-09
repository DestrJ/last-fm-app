import React from "react";
import Track from "./Track";

const Tracks = ({tracks, loading}) => {
    if ( loading ) {
        return  <h2>Loading...</h2>;
    }

    return (
        <div className="tracks-wrapper">
            {
                tracks && tracks.map(track => (
                    <Track key={track.name + track.artist.name} track={track} />
                ))
            }
        </div>
    );
};

export default Tracks;