import calendarAPI              from "../lib/calendarAPI";
import { pushState }            from "redux-router";
import * as NotificationActions from "./notification";
import * as UIActions           from "./ui";
import NProgress                from "nprogress";

export function loadCalendar(id) {

  return(dispatch, getState) => {

    let state = getState();

    dispatch(UIActions.loadingChanged(true));
    NProgress.start();

    calendarAPI.get(id).then(function(result) {

      dispatch(UIActions.loadingChanged(false));
      NProgress.done();

      if(result) {

        dispatch(showCalendar(result));

      } else {

        dispatch(NotificationActions.showErrorNotification("No calendar for that ID.\nTry again or create a new calendar."));

        if(state.calendars.length) {
          dispatch(pushState(null, "/calendars/" + state.email));
        } else {
          dispatch(pushState(null, "/"));
        }

      }

    });

  }

}

export function showCalendar(json) {

  return {
    type: "SHOW_CALENDAR",
    calendar: json
  };

}