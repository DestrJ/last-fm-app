import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {boundGetArtist} from "../actions/boundActions";
import {getImageFromArray} from "../helper/commonHelper";

class Artist extends React.Component {
    static propTypes = {
        artist: PropTypes.object,
        loading: PropTypes.bool.isRequired,
        boundGetArtist: PropTypes.func.isRequired
    };

    componentDidMount() {
        const artistName = this.props.match && this.props.match.params && this.props.match.params.name;
        // console.log(artistName);
        // console.log(this.props.match);
        this.props.boundGetArtist(artistName);
    }

    render() {
        if (this.props.loading) {
            return <h2>Loading...</h2>
        }
        const artist = this.props.artist != null && this.props.artist;

        if ( artist === false ) {
            return <h2>This author does not exists</h2>;
        }

        const image = getImageFromArray(artist.image, artist.name);

        return (
            <div className="artist">
                <h2 className="artist__name">{artist.name}</h2>
                {image}
                <div className="artist__tags">
                    {
                        artist.tags && artist.tags.tag.map(tag => (
                            <a key={tag.name} href={tag.url}>{tag.name}</a>
                        ))
                    }
                </div>
                <div className="artist__content">
                    {artist.bio && artist.bio.content}
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    artist: state.artist.artist,
    loading: state.artist.loading
});

export default connect(mapStateToProps, {boundGetArtist})(Artist);