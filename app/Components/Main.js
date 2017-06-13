// Include React
import React from "react";
import { Route, Switch, BrowserRouter } from 'react-router-dom';


import Search from "./Children/Search";
import Saved from "./Children/Saved";
import Results from "./Children/Results";
import helpers from "../utils/helpers";


class Main extends React.Component {

  render() {

    return(

  <div className="container">

    <div className="panel panel-default">
      <div className="panel-heading">
        <h2 className="text-center">New York Times Article Search</h2>
        <p className="text-center">
          Search for articles below!
        </p>
      <p>
        <a href="#/Search" className="btn btn-default">Search</a>
        <a href="#/Saved" className="btn btn-default">Saved Articles</a>
      </p>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <BrowserRouter>
        <Switch>
          <Route exact path="Search" component={Search} />
          <Route exact path="Saved" component={Saved} />
        </Switch>
      </BrowserRouter>
      </div>
    </div>
  </div>
);
}
};

// Export the component back for use in other files
export default Main;
