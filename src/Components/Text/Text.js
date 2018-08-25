import React from "react";

class Text extends React.Component {
  render() {
    return (
      <div>
        <h2> {this.props.resName}</h2>
      </div>
    );
  }
}
export default Text;
