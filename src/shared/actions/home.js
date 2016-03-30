export const REQUEST_CALENDARS = "REQUEST_CALENDARS";
export const RECEIVE_CALENDARS = "RECEIVE_CALENDARS";

export function requestCalendars(email) {
  return {
    type: REQUEST_CALENDARS,
    email
  };
}

export function receiveCalendars(email, json) {
  return {
    type: RECEIVE_CALENDARS,
    email,
    calendars: json.data,
    receivedAt: Date.now()
  }
}

export function fetchCalendars(email) {

  return dispatch => {
    dispatch(requestCalendars(email));
    return calendarAPI.get(email).then(json => dispatch(receivePosts(email, json)));
  }

}