import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router";
import classNames from "classnames";
import * as LayoutActions from '../actions/layout';
import Home from "../components/Home"

class App extends Component {

  constructor(props){
    super(props);
    this.eventUndo = this.eventUndo.bind(this)
    this.eventRedo = this.eventRedo.bind(this)
  }

  eventUndo(e) {
    e.preventDefault();
    this.props.undo();
  }

  eventRedo(e) {
    e.preventDefault();
    this.props.redo();
  }

  render() {

    const { counter } = this.props;

    return (

      <div>
        <nav className="sidebar-nav">
		      <Link to="/home" activeClassName="active">Home</Link>
		      <Link to="/counter" activeClassName="active">Counter</Link>
		      <Link to="/other" activeClassName="active">Other</Link>
		    </nav>
        <div className="container">
          {!this.props.children && <Home />}
          {this.props.children}
        </div>
        <label className="undo-button" onClick={this.eventUndo}>&lt;</label>
        <label className="redo-button" onClick={this.eventRedo}>&gt;</label>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    counter : state.counter.present
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LayoutActions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);