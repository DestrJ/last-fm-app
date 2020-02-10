import React from "react";
import Track from "./Track";

const Tracks = ({tracks, loading, isSearchResult}) => {
    if ( loading ) {
        return  <h2>Loading...</h2>;
    }

    return (
        <div className="tracks-wrapper">
            {
                tracks && tracks.map((track, index) => (
                    <Track
                        key={track.name + index}
                        trackName={track.name}
                        artistName={isSearchResult ? track.artist : track.artist.name}
                        trackImage={track.image}
                        lastFmUrl={isSearchResult ? track.url : track.artist.url}
                    />
                ))
            }
        </div>
    );
};

export default Tracks;