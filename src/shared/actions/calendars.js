import calendarAPI              from "../lib/calendarAPI";
import { pushState }            from "redux-router";
import * as NotificationActions from "./notification";
import * as UIActions           from "./ui";
import NProgress                from "nprogress";

export function loadCalendars(email) {

  return(dispatch) => {

    dispatch(UIActions.loadingChanged(true));
    NProgress.start();

    calendarAPI.get("find/" + email).then(function(result) {

      dispatch(UIActions.loadingChanged(false));
      NProgress.done();

      if(result && result.length) {

        dispatch(changeEmail(email));
        dispatch(showCalendars(result));

      } else {

        dispatch(NotificationActions.showErrorNotification("No calendars for that email address.\nTry again or create a new calendar."));
        dispatch(pushState(null, "/"));

      }

    });

  }

}

export function changeEmail(email) {

  console.log("owenfonwefon");

  return {
    type: "CHANGE_EMAIL",
    email: email
  };

}

export function showCalendars(json) {

  return {
    type: "SHOW_CALENDARS",
    calendars: json
  };

}