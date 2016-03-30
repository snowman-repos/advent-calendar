import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as HomeActions from "../../actions/home";
import Home from "../../components/Home/Home";

function mapStateToProps(state) {
  return {
    calendars: state.calendars.present
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);