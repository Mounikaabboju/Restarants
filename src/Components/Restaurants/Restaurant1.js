import React from "react";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectedRestuarant } from "../../Actions/Actions";

class Restaurant1 extends React.Component {
  selectedRes = resName => {
    this.props.dispatch(selectedRestuarant(resName));
  };
  render() {
    return (
      <div>
        {this.props.restaurantReducer.restuarants.map((e, i) => {
          return (
            <div>
              <Icon img={e.restaurant} resName={e.name} />

              <Text resName={e.name} />
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
export default connect(mapStateToProps)(Restaurant1);
