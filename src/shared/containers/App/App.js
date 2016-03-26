import React, { Component, PropTypes } from "react";
import classNames                      from "classnames";
import Home                            from "../../components/Home/Home";
import Footer                          from "../Footer/Footer";

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {

    return (

      <main>
        <div className="o-page">
          <div className="o-page__container">
            {!this.props.children && <Home />}
            {this.props.children}
          </div>
        </div>
        <Footer></Footer>
      </main>

    );
  }
}

export default App;