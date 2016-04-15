import React, { Component } from "react";

class Window extends Component {

  constructor(props) {

    super(props);

  }

  render() {

    return (

      <div className="c-window">
        <div style={{backgroundImage: "url(" + this.props.content.url + ")"}} className="c-window__content">
          <div className="c-window__cover">
            <div className="c-window__cover__front">
              <div className="c-window__cover__content">{this.props.day}</div>
            </div>
            <div className="c-window__cover__back"></div>
          </div>
        </div>
      </div>

    );
  }
}

export default Window;