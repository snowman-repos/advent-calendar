import React, { Component } from "react";

class Window extends Component {

  constructor(props) {

    super(props);

    this.state = {
      opened: this.props.opened
    }

    this.date = new Date().getDate()

  }

  canOpen() {

    return this.props.day <= this.date

  }

  openWindow() {

    if(this.canOpen()) {

      this.state.opened = true

      this.setState({
        opened: true
      })

      setTimeout(() => {
        let { cover } = this.refs;
        cover.parentElement.removeChild(cover);
      }, 4000);

    }

  }

  showContent() {



  }

  render() {

    // let style = this.state.opened ? { backgroundImage: "url(" + this.props.content.url + ")" } : {}
    let style = {
      backgroundImage: this.state.opened ? "url(" + this.props.content.url + ")" : "url(http://placehold.it/400x400)"
    }

    return (

      <div className={this.state.opened ? "c-window is-open" : "c-window"} onClick={this.state.opened ? this.showContent.bind(this) : this.openWindow.bind(this)}>
        <div style={style} className="c-window__content">
          <div className="c-window__cover" ref="cover">
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