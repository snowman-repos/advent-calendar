import React, { Component, PropTypes } from "react";

class Counter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { incrementCounter, decrementCounter, counter } = this.props;
    return (

        <div>
          <h1>Counter</h1>
          <p>
            <b>Counter: {counter} times</b>
            {" "}
            <button onClick={incrementCounter}>+</button>
            {" "}
            <button onClick={decrementCounter}>-</button>
          </p>
        </div>

    );
  }
}

Counter.propTypes = {
  incrementCounter: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

export default Counter;