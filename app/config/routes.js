// Include the React library
import React from "react";
import { HashRouter, Route, Switch } from 'react-router-dom';

// Reference the high-level components
import Main from "../Components/Main";
import Search from "../Components/Children/Search";
import Saved from "../Components/Children/Saved";
import Results from "../Components/Children/Results";

// Export the Routes
const routes = (

    // The high level component is the Router component
    <HashRouter>

        <Route path="/" component={Main} />

    </HashRouter>
);

export default routes;
