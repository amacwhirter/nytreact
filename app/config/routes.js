// Include the React library
import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

// Reference the high-level components
import Main from "../Components/Main";
import Search from "../Components/Children/Search";
import Saved from "../Components/Children/Saved";
import Results from "../Components/Children/Results";


// Export the Routes
module.exports = (

    // The high level component is the Router component
    <Router history={browserHistory}>
      <Route path="/" component={Main}>

        {/* If user selects Search or Saved show the appropriate component */}
        <Route path="Search" component={Search} />
        <Route path="Saved" component={Saved} />
        <Route path="Results" component={Results} />

        {/* If user selects any other path... we get the Home Route */}
        <IndexRoute component={Search} />
      </Route>

    </Router>
);
