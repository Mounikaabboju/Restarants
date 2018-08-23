import React from "react";
import Restaurant1 from "../Restaurants/Restaurant1";
import Restaurant2 from "../Restaurants/Restaurant2";
import Restaurant3 from "../Restaurants/Restaurant3";

class RestaurantPage extends React.Component {
  render() {
    return (
      <div>
        <Restaurant1 />
        <Restaurant2 />
        <Restaurant3 />
      </div>
    );
  }
}
export default RestaurantPage;
