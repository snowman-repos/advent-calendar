import React, { Component, PropTypes } from "react";
import { connect }                     from "react-redux";
import classNames                      from "classnames";
import Home                            from "../../containers/Home/HomeContainer";
import Header                          from "../../components/Header/Header";
import Footer                          from "../Footer/Footer";
// import imgurAPI                        from "../../lib/imgurAPI";

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {

    const { calendars } = this.props;

    // imgurAPI.get("gallery/t/puppies").then(function(data){console.log(data.data.items.slice(0,24));});

    return (

      <main>
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
}

function mapStateToProps(state) {
  return {
    calendars : state.calendars.present
  };
}

export default connect(mapStateToProps)(App);