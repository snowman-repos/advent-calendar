import { combineReducers } from "redux";
import { routerStateReducer } from "redux-router";
import undoable from "redux-undo";

import home from "./home";

const rootReducer = combineReducers({
  calendars : undoable(home),
  router : routerStateReducer
});

export default rootReducer;