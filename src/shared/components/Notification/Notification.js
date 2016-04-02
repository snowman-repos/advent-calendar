import React, { Component, PropTypes } from "react";
import { Notification } from "react-notification";

class NotificationWrapper extends Component {

  constructor() {

    super();
    this.isActive = this.props.message?true:false
    switch(this.props.notification.notification_type) {

      case "SUCCESS":
        this.color = "red"
        break;

      case "ERROR":
        this.color = "yellow"
        break;

      case "INFO":
        this.color = "blue"
        break;

    }

  }

  render() {

    return (
      <Notification
        isActive={isActive}
        message={message?message:""}
        dismissAfter={5000}
        onDismiss={ ()=>hideNotification() }
        action="X"
        onClick={ ()=>hideNotification() }
        style={{
            bar: {
                background: color,
                color: "black",
                fontSize: "2rem",
            },
            active: {
                left: "3rem",
            },
            action: {
                color: "#FFCCBC",
                fontSize: "3rem",
                border: "1 pt solid black"
            }
        }}
      />
    )
  }

}