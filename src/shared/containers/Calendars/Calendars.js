import { bindActionCreators } from "redux";
import { connect }            from "react-redux";
import * as CalendarsActions  from "../../actions/calendars";
import Calendars              from "../../components/Calendars/Calendars";

let mapStateToProps = state => ({
  calendars: state.calendars,
  ui: state.ui
})

let mapDispatchToProps = dispatch => bindActionCreators(CalendarsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Calendars);