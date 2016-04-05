import React, { Component } from "react";
import { Link }             from "react-router";

class Calendars extends Component {

  // if calendars aren't loaded, or if calendars[0].email != params.email then reload calendars

  constructor() {

    super();

  }

  getLinks() {

    return this.props.calendars.map( calendar => {
      <Link to={"/calendar/" + calendar.id}>{calendar.name}</Link>
    })

  }

  render() {
    return (

      <div>
        <h1>Calendars for: {this.props.calendars[0].email}</h1>
        <ul>
          {this.getLinks()}
        </ul>
      </div>

    );
  }
}

export default Calendars;