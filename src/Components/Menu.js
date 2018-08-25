import React, { Component } from "react";
import Counter from "./Counter/Counter";
import { connect } from "react-redux";

class Menu extends Component {
  render() {
    return (
      <div>
        {this.props.restaurantReducer.items.map((e, i) => {
          return (
            <div>
              <h1>{this.props.restaurantReducer.userSelected}</h1>
              {e.name}
              {e.price}
              <Counter />
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = store => {
  return store;
};
export default connect(mapStateToProps)(Menu);
