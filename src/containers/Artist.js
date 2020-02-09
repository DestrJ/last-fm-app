import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {boundGetArtist} from "../actions/boundActions";
import {getImageFromArray} from "../helper/commonHelper";
import '../assets/artist.scss'

class Artist extends React.Component {
    static propTypes = {
        artist: PropTypes.object,
        loading: PropTypes.bool.isRequired,
        boundGetArtist: PropTypes.func.isRequired
    };

    componentDidMount() {
        const artistName = this.props.match && this.props.match.params && this.props.match.params.name;
        this.props.boundGetArtist(artistName);
    }

    render() {
        if (this.props.loading) {
            return <h2>Loading...</h2>
        }
        const artist = this.props.artist != null && this.props.artist;

        if ( artist === false ) {
            return <h2>This artist does not exists</h2>;
        }

        const image = getImageFromArray(artist.image, artist.name);

        return (
            <div className="artist">
                <h1 className="artist__name">{artist.name}</h1>
                {image}
                <ul className="artist__tags">
                    {
                        artist.tags && artist.tags.tag.map(tag => (
                            <li  key={tag.name}>
                                <a href={tag.url}>{tag.name}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className="artist__content">
                    <p>
                        {artist.bio && artist.bio.content}
                    </p>
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