(this["webpackJsonplast-fm-app"]=this["webpackJsonplast-fm-app"]||[]).push([[0],{41:function(e,t,a){e.exports=a(76)},50:function(e,t,a){},51:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(15),s=a.n(c),o=a(13),i=a(10),l=a(38),u=a(9),p="5b4fb9f3d727b2d7e8003866267e863a",m="https://ws.audioscrobbler.com/2.0/",h={tracks:null,loading:!1,page:1,totalPage:20,searchQuery:""},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOP_TRACKS_LOADING":return Object(u.a)({},e,{loading:!0});case"TOP_TRACKS_LOADED":var a=830;t.payload["@attr"]&&t.payload["@attr"].totalPages&&(a=830);var r=t.payload.track.length>12?t.payload.track.slice(0,12):t.payload.track;return Object(u.a)({},e,{loading:!1,tracks:r,totalPage:a});case"SET_TRACKS_CURRENT_PAGE":return Object(u.a)({},e,{page:t.page});case"TOP_TRACKS_SEARCH_LOADED":t.payload["opensearch:totalResults"];var n=830,c=t.payload.trackmatches.track.length>12?t.payload.trackmatches.track.slice(0,12):t.payload.trackmatches.track;return Object(u.a)({},e,{loading:!1,tracks:c,totalPage:n});case"SET_TOP_TRACKS_SEARCH_STRING":return Object(u.a)({},e,{searchQuery:t.searchQuery});default:return e}},g={loading:!1,artist:null},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ARTIST_LOADING":return Object(u.a)({},e,{loading:!0});case"ARTIST_LOADED":return Object(u.a)({},e,{artist:t.payload,loading:!1});default:return e}},k=Object(i.c)({toptracks:d,artist:f}),E=[l.a],b=Object(i.e)(k,{},Object(i.d)(i.a.apply(void 0,E))),y=a(12),T=(a(50),a(51),function(){return n.a.createElement("header",{className:"page-header"},n.a.createElement("nav",{className:"page-nav"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(y.c,{exact:!0,to:"/last-fm-app/"},"Home")))))}),v=a(11),_=a(17),O=a(18),A=a(20),S=a(19),C=a(21),P=a(22),N=a.n(P),R=function(e,t){var a="";if(Array.isArray(e)&&e.length){var r=e[e.length-1]["#text"];r&&(a=n.a.createElement("img",{src:r,alt:t}))}return a},j=function(e){var t=e.trackName,a=e.artistName,r=e.trackImage,c=e.lastFmUrl,s=R(r,t),o="";if(a){var i="/last-fm-app/artist/"+a.replace(/ /g,"+");o=n.a.createElement("h4",{className:"track__artist-link"},n.a.createElement(y.b,{to:i},a))}return n.a.createElement("div",{className:"track"},s,n.a.createElement("h3",{className:"track__name"},t),o,n.a.createElement("h4",{className:"track__last-fm-link"},n.a.createElement("a",{href:c},"Last FM")))},D=function(e){var t=e.tracks,a=e.loading,r=e.isSearchResult;return a?n.a.createElement("h2",null,"Loading..."):n.a.createElement("div",{className:"tracks-wrapper"},t&&t.map((function(e,t){return n.a.createElement(j,{key:e.name+t,trackName:e.name,artistName:r?e.artist:e.artist.name,trackImage:e.image,lastFmUrl:r?e.url:e.artist.url})})))},G=a(40),L=a.n(G),I=(a(73),function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(A.a)(this,Object(S.a)(t).call(this,e))).pageClickHandler=function(e){var t=e.selected+1;a.props.boundSetTracksCurrentPage(t)},a.formOnChangeHandler=function(e){a.props.boundSetTopTracksSearchQuery(e.target.value)},a.formOnSubmitHandler=function(e){e.preventDefault(),a.props.boundSetTracksCurrentPage(1),""!==a.props.searchQuery?(a.props.boundGetSearchTracks(1,a.props.searchQuery),a.searchActive=!0):a.props.boundGetTracks(1)},a.searchActive=!1,a}return Object(C.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.searchActive=!1,this.props.boundGetTracks(1),this.searchActive=!1}},{key:"componentDidUpdate",value:function(e){this.props.searchQuery!==e.currentPage&&""===this.props.searchQuery&&(this.searchActive=!1),this.props.currentPage!==e.currentPage&&(this.searchActive?this.props.boundGetSearchTracks(this.props.currentPage,this.props.searchQuery):this.props.boundGetTracks(this.props.currentPage))}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{className:"search-form",onSubmit:this.formOnSubmitHandler},n.a.createElement("input",{type:"text",placeholder:"Enter search query",value:this.props.searchQuery,onChange:this.formOnChangeHandler}),n.a.createElement("button",{type:"submit"},"Search")),n.a.createElement("h2",null,this.searchActive?"Search:":"Top tracks"),n.a.createElement(L.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:this.props.totalPage,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.pageClickHandler,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active",forcePage:this.props.currentPage-1}),n.a.createElement(D,{tracks:this.props.tracks,loading:this.props.loading,isSearchResult:this.searchActive}))}}]),t}(n.a.Component)),Q=Object(o.b)((function(e){return{tracks:e.toptracks.tracks,loading:e.toptracks.loading,currentPage:e.toptracks.page,totalPage:e.toptracks.totalPage,searchQuery:e.toptracks.searchQuery}}),{boundGetTracks:function(e,t){return function(a){a({type:"TOP_TRACKS_LOADING"}),N.a.get(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;return"".concat(m,"?method=chart.gettoptracks&page=").concat(e,"&limit=").concat(t,"&api_key=").concat(p,"&format=json")}(e,t)).then((function(e){return a({type:"TOP_TRACKS_LOADED",payload:e.data.tracks})}))}},boundSetTracksCurrentPage:function(e){return function(t){t(function(e){return{type:"SET_TRACKS_CURRENT_PAGE",page:e}}(e))}},boundGetSearchTracks:function(e,t,a){return function(r){r({type:"TOP_TRACKS_LOADING"}),N.a.get(function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12;return"".concat(m,"?method=track.search&page=").concat(e,"&limit=").concat(a,"&track=").concat(t,"&api_key=").concat(p,"&format=json")}(e,t,a)).then((function(e){return r({type:"TOP_TRACKS_SEARCH_LOADED",payload:e.data.results})}))}},boundSetTopTracksSearchQuery:function(e){return function(t){t(function(e){return{type:"SET_TOP_TRACKS_SEARCH_STRING",searchQuery:e}}(e))}}})(I),H=(a(74),function(e){function t(){return Object(_.a)(this,t),Object(A.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match&&this.props.match.params&&this.props.match.params.name;this.props.boundGetArtist(e)}},{key:"render",value:function(){if(this.props.loading)return n.a.createElement("h2",null,"Loading...");var e=null!=this.props.artist&&this.props.artist;if(!1===e)return n.a.createElement("h2",null,"This artist does not exists");var t=R(e.image,e.name);return n.a.createElement("div",{className:"artist"},n.a.createElement("h1",{className:"artist__name"},e.name),t,n.a.createElement("ul",{className:"artist__tags"},e.tags&&e.tags.tag.map((function(e){return n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.url},e.name))}))),n.a.createElement("div",{className:"artist__content"},n.a.createElement("p",null,e.bio&&e.bio.content)))}}]),t}(n.a.Component)),K=Object(o.b)((function(e){return{artist:e.artist.artist,loading:e.artist.loading}}),{boundGetArtist:function(e){return function(t){t({type:"ARTIST_LOADING"}),N.a.get(function(e){return"".concat(m,"?method=artist.getinfo&artist=").concat(e,"&api_key=").concat(p,"&format=json")}(e)).then((function(e){return t({type:"ARTIST_LOADED",payload:e.data.artist})}))}}})(H),x=function(){return n.a.createElement("main",null,n.a.createElement(v.c,null,n.a.createElement(v.a,{exact:!0,path:"/last-fm-app/",component:Q}),n.a.createElement(v.a,{exact:!0,path:"/last-fm-app/artist/:name",component:K})))},w=(a(75),function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(T,null),n.a.createElement(x,null))});s.a.render(n.a.createElement(o.a,{store:b},n.a.createElement(y.a,null,n.a.createElement(w,null))),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.dc8bd3df.chunk.js.map