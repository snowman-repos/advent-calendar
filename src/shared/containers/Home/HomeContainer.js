import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as HomeActions from "../../actions/home";
import Home from "../../components/Home/Home";

let mapStateToProps = state => ({
  calendars: state.calendars,
  ui: state.ui
})

let mapDispatchToProps = dispatch => bindActionCreators(HomeActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);