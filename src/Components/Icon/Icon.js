import React from "react";
import "./Icon.css";
import { Link } from "react-router-dom";

class Icon extends React.Component {
  render() {
    return (
      <div>
        <Link to="restaurant1">
          <img className="icon" src={this.props.img} alt="Thangabali" />
        </Link>
      </div>
    );
  }
}
export default Icon;
