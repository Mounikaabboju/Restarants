import React from "react";
import Header from "./Components/header/Header";
import { Route, Switch } from "react-router-dom";
import Restaurant1Route from "./Components/Restaurant1Route";
import Restaurant2Route from "./Components/Restaurant2Route";
import Restaurant3Route from "./Components/Restaurant3Route";
import RestaurantPage from "./Components/Restaurants/RestaurantPage";
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/restaurant1" component={Restaurant1Route} />
          <Route path="/restaurant2" component={Restaurant2Route} />
          <Route path="/restaurant3" component={Restaurant3Route} />
          <Route component={RestaurantPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
