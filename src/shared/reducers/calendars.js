export default function calendars(state={}, action) {

    let idx = 0;

    switch (action.type) {

      case "SHOW_CALENDARS":

      return Object.assign({}, state, {
        calendars: action.calendars
      });

        break;

      case "SHOW_CALENDAR":

        return Object.assign({}, state, {
          calendar: action.calendar
        });

        break;

      case "ADD_CALENDAR":

        return Object.assign({}, state, {
          calendar: action.calendar,
          calendars: [
            ...state.calendars,
            action.calendar,
          ]
        });

        break;

      case "UPDATE_CALENDAR":

        idx = state.calendars.findIndex( r => r.id === action.calendar.id)

        if(idx==-1) {
          return Object.assign({}, state, {
            calendar: action.calendar
          });
        } else {
          return Object.assign({}, state, {
            calendar: action.calendar,
            calendars: [
              ...state.calendars.slice(0, idx),
              action.calendar,
              ...state.calendars.slice(idx+1),
            ]
          });
        }

        break;

      case "DELETE_CALENDAR":

        idx = state.calendars.findIndex( r => r.id == action.id)

        if(idx==-1) {
          return Object.assign({}, state, {
            calendar: undefined
          });
        } else {
          return Object.assign({}, state, {
            calendar: undefined,
            calendars: [
              ...state.calendars.slice(0, idx),
              ...state.calendars.slice(idx+1),
            ]
          });
        }

        break;

    }

    return state;

}