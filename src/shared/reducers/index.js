import { combineReducers }    from "redux";
import { routerStateReducer } from "redux-router";
import { formReducer }        from "redux-form";
// import undoable from "redux-undo";

import calendars from "./calendars";
import email from "./email";
import notification from "./notification";
import ui from "./ui";

const rootReducer = combineReducers({
  calendars: calendars,
  email: email,
  notification: notification,
  router: routerStateReducer,
  ui: ui
});

export default rootReducer;