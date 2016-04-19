import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { hideNotification } from "../../actions/notification";
import { Notification } from "react-notification";

const colors = {
  danger: "#c0392b",
  info: "#ffffff",
  primary: "#e74c3c",
  red: "#e74c3c",
  success: "#ffffff",
  warning: "#f39c12",
  white: "#ffffff"
}

const NotificationContainer = (props) => {

  let { message, notification_type } = props.notification;
  let { onHide } = props;
  let isActive = message?true:false;
  let backgroundColor;
  let foregroundColor;

  switch(notification_type) {

    case "SUCCESS":
      backgroundColor = colors.success
      foregroundColor = colors.red
      break;

    case "ERROR":
      backgroundColor = colors.danger
      foregroundColor = colors.white
      break;

    case "INFO":
      backgroundColor = colors.info
      foregroundColor = colors.red
      break;

  }

    return <Notification
        isActive = {isActive}
        message = {message?message:""}
        dismissAfter = {5000}
        onDismiss = { ()=>onHide() }
        action = "&times;"
        onClick = { ()=>onHide() }
        barStyle = {{
          background: backgroundColor,
          borderRadius: 0,
          bottom: 0,
          boxShadow: "none",
          color: foregroundColor,
          fontSize: "0.75rem",
          left: 0,
          opacity: 0,
          padding: "0.75rem",
          textAlign: "center",
          width: "100%",
          zIndex: 4
        }}
        activeBarStyle = {{
          opacity: 1
        }}
        actionStyle = {{
          color: foregroundColor,
          opacity: "0.75"
        }}
    />

}

let mapStateToProps = state => ({
  notification: state.notification
})

let mapDispatchToProps = dispatch => ({
	onHide: () => {
		dispatch(hideNotification())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);