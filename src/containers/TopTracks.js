import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {boundGetTracks, boundSetTracksCurrentPage} from "../actions/boundActions";

class TopTracks extends React.Component {
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        currentPage: PropTypes.number.isRequired,
        totalPage: PropTypes.number.isRequired,
        // limit: PropTypes.number.isRequired,
        boundGetTracks: PropTypes.func.isRequired,
        boundSetTracksCurrentPage: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.boundGetTracks();
    }

    render() {
        if ( this.props.loading ) {
            return  <h2>Loading...</h2>
        }



        return (
            <h2>Top tracks</h2>
        );
    }
}

const mapStateToProps = state => ({
    tracks: state.toptracks.tracks,
    loading: state.toptracks.loading,
    currentPage: state.toptracks.page,
    totalPage: state.toptracks.totalPage,
});

export default connect(mapStateToProps, {boundGetTracks, boundSetTracksCurrentPage})(TopTracks);