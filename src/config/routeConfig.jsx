import React from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LocationList from "../layout/locationList";
import LocationDetail from "../layout/locationDetail";



const Routing = () => {
  const history = createBrowserHistory();

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LocationList}></Route>
        <Route path="/location_detail/:id" component={LocationDetail}></Route>
      </Switch>
    </Router>
  );
};
export default Routing;