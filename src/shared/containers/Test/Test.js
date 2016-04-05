import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as TestActions from "../../actions/test";
import Test from "../../components/Test/Test";

let mapStateToProps = state => ({
  calendars: state.calendars,
  ui: state.ui
})

let mapDispatchToProps = dispatch => bindActionCreators(TestActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Test);