import React, { Component, PropTypes } from 'react';

class Icon extends Component {

  render() {

    const { icon } = this.props;

    return (

      <svg className={"o-icon o-icon--"+ icon} viewBox="0 0 32 32">
        <use xlinkHref={"#icon-"+ icon}></use>
      </svg>

    );
  }
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired
};

export default Icon;

