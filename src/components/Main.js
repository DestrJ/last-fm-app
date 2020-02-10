import React from "react";
import {Route, Switch} from "react-router-dom";
import TopTracks from "../containers/TopTracks";
import Artist from "../containers/Artist";

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + "/"} component={TopTracks} />
                <Route exact path={process.env.PUBLIC_URL + "/artist/:name"} component={Artist} />
            </Switch>
        </main>
    );
};

export default Main;