import React, { Component, PropTypes } from "react";
import { connect }                     from "react-redux";
import classNames                      from "classnames";
import Home                            from "../../containers/Home/HomeContainer";
import Test                            from "../../containers/Test/Test";
import NotificationContainer           from "../../containers/Notification/Notification";
import Loading                         from "../../components/Loading/Loading";
import Header                          from "../../components/Header/Header";
import Footer                          from "../Footer/Footer";
import { loadCalendars}                from "../../actions/test"
import { bindActionCreators }          from "redux"

class App extends Component {

  render() {

    const { isLoading } = this.props.ui;

    return (

      <main>
        <NotificationContainer />
        <Loading isLoading={isLoading} />
        <div className="o-page">
          <Header />
          <div className="o-page__container">
            {!this.props.children && <Home />}
            {this.props.children}
          </div>
        </div>
        <Footer />
      </main>

    );
  }

  componentDidMount() {

    let { loadCalendars } = this.props;

  }

}

const mapStateToProps = state => ({
  calendars: state.calendars,
  ui: state.ui
})

const mapDispatchToProps = dispatch => bindActionCreators({
    loadCalendars
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);