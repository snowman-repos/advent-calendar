import { combineReducers }    from "redux";
import { routerStateReducer } from "redux-router";
import { formReducer }        from "redux-form";
// import undoable from "redux-undo";

// import home from "./home";

import calendars from "./calendars";
import notification from "./notification";
import ui from "./ui";

const rootReducer = combineReducers({
  calendars: calendars,
  notification: notification,
  router: routerStateReducer,
  ui: ui
});

export default rootReducer;