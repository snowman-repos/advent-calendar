import { bindActionCreators } from "redux";
import { connect }            from "react-redux";
import * as CalendarActions  from "../../actions/calendar";
import Calendar              from "../../components/Calendar/Calendar";

let mapStateToProps = state => ({
  calendar: state.calendar,
  calendars: state.calendars,
  email: state.email,
  ui: state.ui
})

let mapDispatchToProps = dispatch => bindActionCreators(CalendarActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);