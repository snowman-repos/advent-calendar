import calendarAPI from "../lib/calendarAPI";
import { pushState } from "redux-router";

export function loadCalendars(email) {

  return(dispatch, getState) => {
    let state = getState();
    // dispatch(loadingChanged(true));
    calendarAPI.get("find/" + email).then(function(result) {
      dispatch(showCalendars(result));
      dispatch(pushState(null, "/calendars/" + email));
      // dispatch(loadingChanged(false));
    });
  }

}

export function showCalendars(json) {
    return {
        type: "SHOW_CALENDARS",
        calendars: json
    };
}

