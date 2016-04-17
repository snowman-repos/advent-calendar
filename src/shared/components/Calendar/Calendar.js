import React, { Component } from "react";
import Masonry              from "react-masonry-component";
import Window               from "../Window/Window";

let masonryOptions = {
  columnWidth: ".c-windows__item",
  gutter: ".c-windows__gutter",
  itemSelector: ".c-windows__item",
  percentPosition: true,
  transitionDuration: "0.4s"
};

class Calendar extends Component {

  constructor(props) {

    super(props);

    this.state = {
      calendar: this.props.calendars.calendar || {},
      calendars: this.props.calendars.calendars || [],
      email: this.props.email,
      id: this.props.params.id,
      loaded: false
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

  componentDidMount() {

    setTimeout(() => {

      if(window) {
        window.dispatchEvent(new CustomEvent("resize"));
      }

    }, 300);

    setTimeout(() => {
      this.state.loaded = true;
      this.setState({loaded: true});
    }, 600)

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
            height: window.height + "vh"
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
      return(<div className="u-centred">Loading calendar&hellip;</div>);
    }

    let { calendar } = this.state;

    return (

      <div className={ this.state.loaded ? "c-calendar is-loaded" : "c-calendar" }>
        <h2 className="u-centred">{calendar.name}</h2>
        <Masonry
          className={"c-windows"}
          elementType={"ul"}
          options={masonryOptions}
          disableImagesLoaded={false}
        >
          <li className="c-windows__gutter"></li>
          {this.getWindows()}
        </Masonry>
        <footer>share this calendar</footer>
      </div>

    );
  }
}

export default Calendar;