import React from "react";
import {Route, Switch} from "react-router-dom";
import TopTracks from "../containers/TopTracks";

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={TopTracks} />
            </Switch>
        </main>
    );
};

export default Main;