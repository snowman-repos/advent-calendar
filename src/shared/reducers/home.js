import { REQUEST_CALENDARS, RECEIVE_CALENDARS } from "../actions/home";

export default function calendars(state = [], action) {

  return state;

  // switch(action.type) {
  //
  //   case REQUEST_CALENDARS:
  //     return Object.assign({}, state, {
  //       isFetching: true
  //     })
  //
  //   case RECEIVE_CALENDARS:
  //     return Object.assign({}, state, {
  //       isFetching: false,
  //       calendars: action.calendars,
  //       lastUpdated: action.receivedAt
  //     })
  //
  //   default:
  //     return state
  //
  // }

}

// export default function home(state = {}, action) {
//
//   switch(action.type) {
//
//     case GET_CALENDARS:
//       // return getCalendars(action.payload));
//       let calendars = getCalendars(action.payload);
//       console.log(calendars);
//       return Object.assign({}, state, calendars);
//
//     case GOT_CALENDARS:
//       return state.calendars
//
//     default:
//       return state;
//
//   }
//
// }
//
// function getCalendars(email) {
//
//   console.info("searching for: " + email);
//
//   calendarAPI.get("find/" + email).then(function(data){
//
//     if(!data.length){
//
//       console.log("no calendars found");
//
//       return [];
//
//     } else {
//
//       return data;
//
//     }
//
//   });
//
// }