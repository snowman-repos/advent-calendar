import { Route } from "react-router";
import React from "react";

import App from "./containers/App/App";

//Redux Smart
// import CounterPage from "./containers/CounterPage/CounterPage";
import Test from "./containers/Test/Test";

//Redux Dumb
// import HomeContainer from "./containers/Home/HomeContainer";
// import CreatePage from "./components/Create/Create";
// import Calendar from "./components/Calendar/Calendar";
import Calendars from "./components/Calendars/Calendars";
import Error from "./components/Error/Error";

export default (
  <Route name="app" path="/" component={App}>
      <Route path="test" component={Test} />
      <Route path="calendars/:email" component={Calendars} />
      <Route path="*" component={Error}/>
  </Route>
);
