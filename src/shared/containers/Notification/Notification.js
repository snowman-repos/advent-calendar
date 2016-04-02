import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as NotificationActions from "../../actions/notification";
import NotificationWrapper from "../../components/Notification/Notification";

let mapStateToProps = state => ({
  notification: state.notification
})

let mapDispatchToProps = dispatch => bindActionCreators(NotificationActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NotificationWrapper);