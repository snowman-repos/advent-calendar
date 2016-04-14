import React, { Component } from "react";
import { Link }             from "react-router";

class Calendars extends Component {

  constructor(props) {

    super(props);

    this.state = {
      calendars: this.props.calendars || [],
      email: this.props.params.email
    }

  }

  componentDidMount() {

    if(Object.keys(this.state.calendars).length === 0 && JSON.stringify(this.state.calendars) === JSON.stringify({})) {
      this.loadCalendars();
    }

    if(this.state.calendars) {
      if(this.state.calendars.calendars) {
        this.setState({
          calendars:  this.state.calendars.calendars
        });
        this.state.calendars = this.state.calendars.calendars;
      }
    }

  }

  componentWillReceiveProps(nextProps) {

    this.state.calendars = nextProps.calendars;

    this.setState({
      calendars:  nextProps.calendars.calendars
    })

  }

  loadCalendars() {

    this.props.loadCalendars(this.state.email);

  }

  getLinks() {

    if(Array.isArray(this.state.calendars)) {
      return(this.state.calendars.map(function(calendar){
        return(
          <li className="o-list__item" key={calendar._id}>
            <Link to={"/calendar/" + calendar._id} className="o-list__item__link">{calendar.name}</Link>
          </li>
        )
      }))
    } else {
      return ""
    }

  }

  render() {

    return (

      <div className="c-calendars">
        <h2 className="c-calendars__heading">Calendars for: {this.state.email}</h2>
        <ul className="o-list">
          {this.getLinks()}
        </ul>
      </div>

    );
  }
}

export default Calendars;