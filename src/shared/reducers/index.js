import { combineReducers }    from "redux";
import { routerStateReducer } from "redux-router";
import { formReducer }        from "redux-form";
// import undoable from "redux-undo";

// import home from "./home";

import calendars from "./calendars";
// import notifications from "./notifications";
// import ui from "./ui";

const rootReducer = combineReducers({
  calendars: calendars,
  router: routerStateReducer
});

export default rootReducer;