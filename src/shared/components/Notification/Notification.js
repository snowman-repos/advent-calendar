import React, { Component, PropTypes } from "react";
import { Notification } from "react-notification";

class NotificationWrapper extends Component {

  constructor() {

    super();

    console.log(this.props);

    this.isActive = this.props.message?true:false;
    this.message = this.props.message;
    this.onHide = this.props.onHide
    this.notification_type = this.props.notification_type;
    this.color = "green";

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
        isActive={this.isActive}
        message={this.message?this.message:""}
        dismissAfter={5000}
        onDismiss={ ()=>this.onHide() }
        action="X"
        onClick={ ()=>this.onHide() }
        style={{
            bar: {
                background: this.color,
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