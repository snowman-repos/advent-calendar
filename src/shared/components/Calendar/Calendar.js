import React, { Component } from 'react';

class Calendar extends Component {

  constructor(props) {

    super(props);

    this.state = {
      calendar: this.props.calendars.calendar || {},
      calendars: this.props.calendars.calendars || [],
      email: this.props.email,
      id: this.props.params.id
    }

  }

  componentWillMount() {

    if(Object.keys(this.state.calendar).length === 0 && JSON.stringify(this.state.calendar) === JSON.stringify({})) {
      this.loadCalendar();
    }

    if(this.state.calendar) {
      if(this.state.calendar.calendar) {
        this.setState({
          calendar: this.state.calendar.calendar
        });
        this.state.calendar = this.state.calendar.calendar;
      }
    }

  }

  componentWillReceiveProps(nextProps) {

    this.state.calendar = nextProps.calendars.calendar;

    this.setState({
      calendar:  nextProps.calendars.calendar
    })

  }

  loadCalendar() {

    this.props.loadCalendar(this.state.id);

  }

  render() {

    if(!this.state.calendar) {
      return(<div>Loading</div>);
    }

    let { calendar } = this.state
    console.log(calendar.name);

    return (

      <div className="c-calendar">
        <h1 className="u-centred">{calendar.name}</h1>
      </div>

    );
  }
}

export default Calendar;