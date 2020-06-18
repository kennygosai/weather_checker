import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Daily from "../pages/Daily";
import DailyDetailed from "../pages/DailyDetailed";
import HourlyView from "../pages/HourlyView";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Daily} />
        <Route exact path="/day/:day" component={DailyDetailed} />
        <Route exact path="/hour" component={HourlyView} />
      </Switch>
    </Router>
  );
};
export default Routes;
