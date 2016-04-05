import React, { Component, PropTypes } from "react";
import { Link }                        from "react-router";

class Home extends Component {

  constructor(props) {

    super(props);
    this.state = {}

  }

  componentWillMount() {

    this.state = {
      email: ""
    }

  }

  handleChange(e) {

    this.setState({ email: e.target.value });

  }

  isntBlank() {

    return(this.state.email !== "");

  }

  isValidEmail() {

    let regex = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return(regex.test(this.state.email));

  }

  loadCalendars(e) {

    e.preventDefault();
    // let email = this.myTextInput.value;
    if(this.isntBlank() && this.isValidEmail())
      this.props.loadCalendars(this.state.email);

  }

  render() {

    return (

      <section className="u-centred">

        <Link to="/create" className="o-button o-button--ghost o-button--ghost--white">Create a new Calendar</Link>
        <p>or search for your existing calendars:</p>
        <form action={this.loadCalendars.bind(this)} className="o-form" onSubmit={this.loadCalendars.bind(this)}>
          <div className="o-form__input-group">
            <label className="o-form__label" htmlFor="email">Your email address:</label>
            <input className="o-form__input o-form__input--centred" id="email" name="email" placeholder="you@server.com" type="email" value={this.state.email} onChange={this.handleChange.bind(this)} />
            <input className="o-button o-button--ghost o-button--ghost--white" type="submit" value="get your calendars" />
          </div>
        </form>

      </section>

    );
  }

}

export default Home;