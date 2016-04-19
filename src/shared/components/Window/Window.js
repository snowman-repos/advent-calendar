import React, { Component }     from "react";
import Modal                    from "react-modal";
import NProgress                from "nprogress";

const modalStyle = {
  content : {
    top                   : "50%",
    left                  : "50%",
    right                 : "auto",
    bottom                : "auto",
    marginRight           : "-50%",
    transform             : "translate(-50%, -50%)",
  }
};

class Window extends Component {

  constructor(props) {

    super(props);

    this.state = {
      opened: this.props.opened,
      modalIsOpen: false
    }

  }

  canOpen() {

    let today = new Date();
    let windowDate = new Date(this.props.year, 11, this.props.day);
    // TODO: uncomment this line and delete the next
    // let canOpen = today >= windowDate;
    let canOpen = this.props.day <= today.getDate();

    if(!canOpen) {

      let options = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric"
      };

      this.props.showNotification(`You'll have to wait until ${windowDate.toLocaleDateString("en-gb", options)} before you can open this window!`)

    }

    return canOpen

    // return this.props.day <= today.getDate()

  }

  loadImage(src) {

    if(document) {

      let image = document.createElement("img");

      NProgress.start();

      image.src = src

      image.onload = () => {

        NProgress.done();

      }
    }

  }

  openWindow() {

    if(this.canOpen()) {

      this.loadImage(this.props.content.url);

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

  closeModal() {

    this.state.modalIsOpen = false;
    this.setState({modalIsOpen: false});

  }

  showContent() {

    this.state.modalIsOpen = true;
    this.setState({modalIsOpen: true});

  }

  getModalContentStyle() {

    let rect = this.refs.window.getBoundingClientRect()

    return(
      {
        height: this.refs.window.offsetHeight,
        left: rect.left,
        top: rect.top,
        width: rect.width
      }
    );

  }

  modalOpened() {

    this.refs.modal.node.firstChild.firstChild.addEventListener("click", () => {
      this.closeModal();
    });

    if(document && window) {

      document.onkeydown = (e) => {

        e = e || window.event;

        if (e.keyCode == 27) {
          this.closeModal();
        }

      };

    }

  }

  render() {

    let style = this.state.opened ? { backgroundImage: "url(" + this.props.content.url + ")" } : {}

    return (

      <div className={this.state.opened ? "c-window is-open" : "c-window"} onClick={this.state.opened ? this.showContent.bind(this) : this.openWindow.bind(this)} ref="window">
        <div style={style} className="c-window__content">
          { !this.state.opened && <svg fill="#c0392b" viewBox="0 0 200 200"><g><path d="M117.5180054 81.3359985h-4.3250046v-3.8669968c0-0.8120041-0.6579971-1.4690018-1.4700012-1.4690018s-1.4700012 0.6569977-1.4700012 1.4690018v3.8669968H89.7470016v-3.8669968C89.7470016 76.6569977 89.0889969 76 88.2770004 76c-0.810997 0-1.4690018 0.6569977-1.4690018 1.4690018v3.8669968h-4.3269958c-3.439003 0-6.2360001 2.9980011-6.2360001 6.6829987v29.2960052c0 3.685997 2.7969971 6.6849976 6.2360001 6.6849976h35.0369949c3.439003 0 6.2369995-2.9990005 6.2369995-6.6849976V88.0189972C123.7550049 84.3339996 120.9570007 81.3359985 117.5180054 81.3359985zM113.0530014 113.9550018c-0.1579971 0.3529968-0.5089951 0.5789948-0.8940048 0.5789948h-8.1469955v4.5670013c0 0.5420074-0.4379959 0.9800034-0.9789963 0.9800034h-6.0630035c-0.5419998 0-0.9790039-0.4379959-0.9790039-0.9800034v-4.5670013h-8.147995c-0.3860016 0-0.7360001-0.2269974-0.8939972-0.5789948 -0.1580048-0.352005-0.0950012-0.7630005 0.1619949-1.052002l5.9599991-6.701004h-3.2060013c-0.3769989 0-0.7210007-0.2179947-0.8839951-0.5579987 -0.163002-0.3409958-0.1150055-0.7460022 0.1230011-1.0390015l6.0379944-7.4519958h-1.7749939c-0.4029999 0-0.7630005-0.2460022-0.9120026-0.6210022 -0.1470032-0.3740005-0.0510025-0.8009949 0.2429962-1.0749969l6.6370087-6.1949997c0.3769989-0.3510056 0.9599915-0.3510056 1.336998 0l6.5250015 6.0949936c0.2649994 0.1750031 0.4379959 0.4760056 0.4379959 0.8170013 0 0.5410004-0.4379959 0.9790039-0.9789963 0.9790039 -0.0050049 0.0009995-0.0130005 0-0.0200043 0h-1.7750015l5.939003 7.3269958c0.2070007 0.1809998 0.3379974 0.4459991 0.3379974 0.7420044 0 0.5400009-0.4379959 0.9789963-0.9789963 0.9789963 -0.0049973 0.0009995-0.012001 0-0.0190048 0h-3.2049942l5.9569931 6.701004C113.1470032 113.1920013 113.2099991 113.6040039 113.0530014 113.9550018z"/></g></svg> }
          { this.state.opened &&
            <Modal
              className="c-modal"
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.modalOpened.bind(this)}
              onClick={this.closeModal.bind(this)}
              onRequestClose={this.closeModal.bind(this)}
              overlayClassName="c-modal__overlay"
              ref="modal" >
              <button className="o-button--plain c-modal__close-button" onClick={this.closeModal.bind(this)}>&times;</button>
              <div className="c-modal__content" style={this.getModalContentStyle()}>
                <img className="c-modal__content" src={this.props.content.url} />
              </div>
            </Modal>
          }
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