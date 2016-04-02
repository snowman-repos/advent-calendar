import React, { Component, PropTypes } from "react";

class Test extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  // componentDidMount() {
  //   this.loadCalendars = this.props.loadCalendars;
  // }

  render() {

    return(
      <div>

        <h1>Test</h1>
        <button onClick={this.loadCalendars.bind(this)}>load calendars</button>
        <input type="text" ref={(ref) => this.myTextInput = ref} />

      </div>
    )

  }

  loadCalendars(e) {

    e.preventDefault();
    let email = this.myTextInput.value;
    this.props.loadCalendars(email);

  }

}

export default Test