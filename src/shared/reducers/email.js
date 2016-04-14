export default function email(state={}, action) {

  let idx = 0;

  switch (action.type) {

    case "CHANGE_EMAIL":

      return Object.assign({}, state, {
        email: action.email
      });

      break;

  }

  return state;

}