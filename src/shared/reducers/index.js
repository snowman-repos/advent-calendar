import { combineReducers } from "redux";
import { routerStateReducer } from "redux-router";
import undoable from "redux-undo";

import counter from "./counter";

const rootReducer = combineReducers({
  counter : undoable(counter),
  router : routerStateReducer
});

export default rootReducer;