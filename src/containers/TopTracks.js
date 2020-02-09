import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {boundGetTracks, boundSetTracksCurrentPage} from "../actions/boundActions";
import Tracks from "../components/Tracks";
import ReactPaginate from 'react-paginate';

class TopTracks extends React.Component {
    static propTypes = {
        tracks: PropTypes.array,
        loading: PropTypes.bool.isRequired,
        currentPage: PropTypes.number.isRequired,
        totalPage: PropTypes.number.isRequired,
        boundGetTracks: PropTypes.func.isRequired,
        boundSetTracksCurrentPage: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.boundGetTracks();
    }

    componentDidUpdate(prevProps) {
        if ( this.props.currentPage !== prevProps.currentPage ) {
            this.props.boundGetTracks(this.props.currentPage);
        }
    }

    pageClickHandler = data => {
        const selected = data.selected + 1;
        this.props.boundSetTracksCurrentPage(selected);
    };

    render() {
        return (
            <>
                <h2>Top tracks</h2>
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={this.props.totalPage}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.pageClickHandler}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
                <Tracks tracks={this.props.tracks} loading={this.props.loading}/>
            </>
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