import { Route } from "react-router";
import React from "react";

import App from "./containers/App/App";

//Redux Smart
import CounterPage from "./containers/CounterPage/CounterPage";

//Redux Dumb
import HomePage from "./components/Home/Home";
import OtherPage from "./components/Other/Other";
import Error from "./components/Error/Error";

export default (
  <Route name="app" path="/" component={App}>
      <Route path="home" component={HomePage} />
      <Route path="other" component={OtherPage} />
      <Route path="counter" component={CounterPage} />
      // <Route path="*" component={Error}/>
  </Route>
);
