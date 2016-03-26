import React, { Component, PropTypes } from "react";
import classNames                      from "classnames";
import Home                            from "../../components/Home/Home";
import Header                          from "../../components/Header/Header"; 
import Footer                          from "../Footer/Footer";

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {

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

export default App;