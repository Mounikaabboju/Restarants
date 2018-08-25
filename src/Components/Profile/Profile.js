import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <img name="restaurant1" src={this.props.url} alt="" />
      </div>
    );
  }
}
export default Profile;
