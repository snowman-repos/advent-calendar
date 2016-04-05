import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { hideNotification } from "../../actions/notification";
import { Notification } from "react-notification";

const colors = {
  primary: "#e74c3c",
  success: "#27ae60",
  info: "#2980b9",
  warning: "#f39c12",
  danger: "#c0392b"
}

const NotificationContainer = (props) => {

    let { message, notification_type } = props.notification;
    let { onHide } = props;
    let isActive = message?true:false;
    let color;

    switch(notification_type) {
        case "SUCCESS":
            color = colors.success
            break;
        case "ERROR":
            color = colors.danger
            break;
        case "INFO":
            color = colors.info
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
          background: color,
          borderRadius: 0,
          bottom: 0,
          boxShadow: "none",
          fontSize: "0.75rem",
          left: 0,
          opacity: 0,
          padding: "0.75rem",
          textAlign: "center",
          width: "100%",
          zIndex: 1
        }}
        activeBarStyle = {{
          opacity: 1
        }}
        actionStyle = {{
          color: "white",
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