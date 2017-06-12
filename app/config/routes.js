// Include the React library
import React from "react";
import { HashRouter, Route, Link, IndexRoute } from 'react-router-dom';

// Reference the high-level components
import Main from "../Components/Main";
import Search from "../Components/Children/Search";
import Saved from "../Components/Children/Saved";
import Results from "../Components/Children/Results";

// Export the Routes
const routes = (

    // The high level component is the Router component
    <HashRouter>
      <Route path="/" component={Main}>

        {/* If user selects Search or Saved show the appropriate component */}
        <Route path="/search" component={Search} />
        <Route path="/saved" component={Saved} />
        <Route path="/results" component={Results} />

        {/* If user selects any other path... we get the Home Route */}
        <IndexRoute component={Main} />
      </Route>
    </HashRouter>
);

export default routes;
