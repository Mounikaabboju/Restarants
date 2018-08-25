import React from "react";
import Profile from "../Components/Profile/Profile";
import { connect } from "react-redux";
import Counter from "./Counter/Counter";
import Menu from "../Components/Menu";

class Restaurant1Route extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.restaurantReducer.userSelected}</h1>
        <Menu />
      </div>
    );
  }
}
const mapStateToProps = store => {
  return store;
};
export default connect(mapStateToProps)(Restaurant1Route);
