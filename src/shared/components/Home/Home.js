import React, { Component, PropTypes } from "react";
import { connect }                     from "react-redux"
import { Link }                        from "react-router";
import { fetchCalendars }              from "../../actions/home";
import NotificationSystem              from "react-notification-system";
import NProgress                       from "nprogress";

class Home extends Component {

  constructor(props) {

    super(props);

    this._notificationSystem = null;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentWillMount() {

    this.state = {
      email: "",
      error: false
    };

  }

  componentDidMount() {

    this._notificationSystem = this.refs.notificationSystem;

  }

  // componentWillReceiveProps(nextProps) {
  //
  //   if(nextProps.calendars !== this.props.calendars) {
  //
  //     console.log("new data?");
  //     console.log(nextProps);
  //
  //   }
  //
  // }

  handleChange(e) {

    this.setState({ email: e.target.value });

    // if(this.isntBlank() && this.isValidEmail()) {
    //   this.setState({ error: false });
    // }

  }

  handleSubmit(e) {

    e.preventDefault();

    if(this.isntBlank() && this.isValidEmail()) {

      NProgress.start();

      dispatch(fetchCalendars(this.state.email));

      // this.props.fetchCalendars(this.state.email);

      // if ok
      // NProgress.done();
      // navigate to list page
      // this.setState({
      //   email: "",
      //   error: false
      // });
      // else
      // this._notificationSystem.addNotification({
      //   dismissible: false,
      //   message: "No calendars found for " + email,
      //   level: "error",
      //   position: "tc"
      // });

    } else {

      // this.setState({ error: true });

    }

  }

  isntBlank() {

    return(this.state.email !== "");

  }

  isValidEmail() {

    let regex = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return(regex.test(this.state.email));

  }

  render() {
    const { calendars } = this.props;
    return (

      <section className="u-centred">
        <Link to="/create" className="o-button o-button--ghost o-button--ghost--white">Create a new Calendar</Link>
        <p>or search for your existing calendars:</p>
        <form action={this.props.fetchCalendars} className="o-form" onSubmit={this.handleSubmit}>
          <div className="o-form__input-group">
            <label className="o-form__label" htmlFor="email">Your email address:</label>
            <input className="o-form__input o-form__input--centred" id="email" name="email" placeholder="you@server.com" type="email" value={this.state.email} onChange={this.handleChange} />
            <input className="o-button o-button--ghost o-button--ghost--white" type="submit" value="get your calendars" />
          </div>
        </form>
        <NotificationSystem ref="notificationSystem" />

      </section>

    );
  }

}

Home.propTypes = {
  calendars: PropTypes.array.isRequired
};

export default Home;