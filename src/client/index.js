import BabelPolyfill        from "babel-polyfill";

import React                from "react";
import ReactDOM             from "react-dom";
import { Router }           from "react-router";
import { Provider }         from "react-redux";
import { ReduxRouter }      from "redux-router";

import createBrowserHistory from "history/lib/createBrowserHistory"

import configureStore       from "../shared/store/configureStore";
import routes               from "../shared/routes";
import devTools             from "../server/devtools";

import "../styles/main.styl";

const history = createBrowserHistory();
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter>
      <Router children={routes} history={history} />
    </ReduxRouter>
  </Provider>,
  document.querySelector(".js-app-container")
);

if (process.env.NODE_ENV !== "production") {
  devTools(store);
}