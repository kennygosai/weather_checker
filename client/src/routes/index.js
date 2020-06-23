/*
 * Filename: \client\src\routes\index.js
 * Created Date: Sunday, June 14th 2020, 3:17:20 pm
 * Author: Kenny Gosai
 * 
 * Copyright (c) 2020 Kenny Gosai
 */

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Daily from "../pages/Daily";
import DailyDetailed from "../pages/DailyDetailed";
import HourlyView from "../pages/HourlyView";

/**
 * Router setup for all of the pages
 *
 * @component
 * @example
 * return (
 *   <Routes />
 * )
 */
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
