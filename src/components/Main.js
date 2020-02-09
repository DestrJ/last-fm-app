import React from "react";
import {Route, Switch} from "react-router-dom";
import TopTracks from "../containers/TopTracks";
import Artist from "../containers/Artist";

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={TopTracks} />
                <Route exact path="/artist/:name" component={Artist} />
            </Switch>
        </main>
    );
};

export default Main;