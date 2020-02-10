import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {
    boundGetTracks,
    boundSetTracksCurrentPage,
    boundGetSearchTracks,
    boundSetTopTracksSearchQuery
} from "../actions/boundActions";
import Tracks from "../components/Tracks";
import ReactPaginate from 'react-paginate';
import '../assets/top-tracks.scss';

class TopTracks extends React.Component {
    static propTypes = {
        tracks: PropTypes.array,
        loading: PropTypes.bool.isRequired,
        currentPage: PropTypes.number.isRequired,
        totalPage: PropTypes.number.isRequired,
        searchQuery: PropTypes.string.isRequired,
        boundGetTracks: PropTypes.func.isRequired,
        boundSetTracksCurrentPage: PropTypes.func.isRequired,
        boundGetSearchTracks: PropTypes.func.isRequired,
        boundSetTopTracksSearchQuery: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.searchActive = false;
    }

    componentDidMount() {
        this.searchActive = false;
        this.props.boundGetTracks(1);
        this.searchActive = false;
    }

    componentDidUpdate(prevProps) {
        if ( this.props.searchQuery !== prevProps.currentPage ) {
            if ( this.props.searchQuery === '' ) {
                this.searchActive = false;
            }
        }
        if ( (this.props.currentPage !== prevProps.currentPage) ) { //|| (this.props.searchQuery !== prevProps.searchQuery)
            if ( this.searchActive ) {
                this.props.boundGetSearchTracks(this.props.currentPage, this.props.searchQuery);
            } else {
                this.props.boundGetTracks(this.props.currentPage);
            }
        }
    }

    pageClickHandler = data => {
        const selected = data.selected + 1;
        this.props.boundSetTracksCurrentPage(selected);
    };

    formOnChangeHandler = event => {
        this.props.boundSetTopTracksSearchQuery(event.target.value);
    };

    formOnSubmitHandler = event => {
        event.preventDefault();
        this.props.boundSetTracksCurrentPage(1);
        if ( this.props.searchQuery !== '' ) {
            this.props.boundGetSearchTracks(1, this.props.searchQuery);
            this.searchActive = true;
        } else {
            this.props.boundGetTracks(1);
        }
    };

    render() {
        return (
            <>
                <form className="search-form" onSubmit={this.formOnSubmitHandler}>
                    <input type="text" placeholder="Enter search query" value={this.props.searchQuery} onChange={this.formOnChangeHandler}/>
                    <button type="submit">Search</button>
                </form>
                <h2>{this.searchActive ? 'Search:' : 'Top tracks' }</h2>
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
                    forcePage={this.props.currentPage-1}
                />
                <Tracks tracks={this.props.tracks} loading={this.props.loading} isSearchResult={this.searchActive}/>
            </>
        );
    }
}

const mapStateToProps = state => ({
    tracks: state.toptracks.tracks,
    loading: state.toptracks.loading,
    currentPage: state.toptracks.page,
    totalPage: state.toptracks.totalPage,
    searchQuery: state.toptracks.searchQuery
});

export default connect(mapStateToProps, {boundGetTracks, boundSetTracksCurrentPage, boundGetSearchTracks, boundSetTopTracksSearchQuery})(TopTracks);