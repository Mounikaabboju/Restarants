import React from "react";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";

class Restaurant1 extends React.Component {
  render() {
    return (
      <div>
        <Link to="restaurant1">
          <Icon />
        </Link>
        <Text />
      </div>
    );
  }
}
export default Restaurant1;
