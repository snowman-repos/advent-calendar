import React, { Component } from "react";
import Masonry              from "react-masonry-component";
import Window               from "../Window/Window";

let masonryOptions = {
  gutter: 20,
  transitionDuration: 0
};

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

  getWindows() {

    if(this.state.calendar) {
      if(Array.isArray(this.state.calendar.windows)) {

        let windows = this.state.calendar.windows.sort(function(a, b) {
          return parseFloat(a.order) - parseFloat(b.order);
        });

        return(windows.map(function(window){

          let style = {
            height: window.size.height,
            width: window.size.width
          }

          return(
            <li className="c-windows__item" key={window.day} style={style}>
              <Window {...window} />
            </li>
          )
        }))
      } else {
        return ""
      }
    }

  }

  loadCalendar() {

    this.props.loadCalendar(this.state.id);

  }

  render() {

    if(!this.state.calendar) {
      return(<div>Loading</div>);
    }

    let { calendar } = this.state;

    return (

      <div className="c-calendar">
        <h2 className="u-centred">{calendar.name}</h2>
        <Masonry
          className={"c-windows"}
          elementType={"ul"}
          options={masonryOptions}
          disableImagesLoaded={false}
        >
          {this.getWindows()}
        </Masonry>
        <footer>share this calendar</footer>
      </div>

    );
  }
}

export default Calendar;

// import Masonry              from "react-masonry-component";
// Masonry(React);
// let masonryOptions = {
//   transitionDuration: 0
// };
// <Masonry
//   className={"c-windows"}
//   elementType={"ul"}
//   options={masonryOptions}
//   disableImagesLoaded={false}
// >
//   {this.getWindows()}
// </Masonry>