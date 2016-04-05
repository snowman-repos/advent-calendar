import calendarAPI from "../lib/calendarAPI";
import { pushState } from "redux-router";
import * as NotificationActions from "./notification";
import * as UIActions from "./ui";

export function loadCalendars(email) {

  return(dispatch, getState) => {
    let state = getState();
    dispatch(UIActions.loadingChanged(true));
    calendarAPI.get("find/" + email).then(function(result) {
      dispatch(UIActions.loadingChanged(false));
      if(result && result.length) {
        dispatch(showCalendars(result));
        dispatch(pushState(null, "/calendars/" + email));
      } else {
        dispatch(NotificationActions.showErrorNotification("No calendars for that email address.\nTry again or create a new calendar."));
      }
    });
  }

}

export function showCalendars(json) {
    return {
        type: "SHOW_CALENDARS",
        calendars: json
    };
}

