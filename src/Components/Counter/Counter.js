import React from "react";

import { connect } from "react-redux";
import { addCount, subCount } from "../../Actions/Actions";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  decrementCount = () => {
    if (this.state.count !== 0) {
      this.setState({
        count: this.state.count - 1
      });
    } else {
      this.setState({
        count: 0
      });
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.decrementCount}>-</button>
        {this.state.count}
        <button onClick={this.incrementCount}>+</button>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return store;
};
export default connect(mapStateToProps)(Counter);
