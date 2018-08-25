export const restaurantReducer = (
  state = {
    restuarants: [
      {
        restaurant:
          "http://thedishondesmoines.com/wp-content/uploads/2012/01/Chisme_Sign.png",
        name: "Thangaballi Restuarant"
      },
      {
        restaurant:
          "http://2.bp.blogspot.com/-mdPegR7sHAw/Uo67ddWeoeI/AAAAAAAAEaY/OQIE1pikgwI/s1600/photo+5.JPG",
        name: "Kritunga Restuarant"
      },
      {
        restaurant:
          "https://images.desimartini.com/media/external/55575-_828cae7c-5a46-11e7-9d38-39c470df081e.jpg",
        name: "Hyderabad Chef's Restuarant"
      }
    ],
    items: [
      {
        name: "Chicken Biryani",
        price: 150
      },
      {
        name: "Mutton Biryani",
        price: 200
      },
      {
        name: "Fish Biryani",
        price: 220
      },
      {
        name: "Prawns Biryani",
        price: 152500
      }
    ],
    count: 0,
    userSelected: "Default"
  },
  action
) => {
  switch (action.type) {
    case "INCREMENT":
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case "DECREMENT":
      return Object.assign({}, state, {
        count: state.count - 1
      });
    case "SELECTED_RESTURANT":
      return Object.assign({}, state, {
        userSelected: action.ResName
      });
    default:
      return state;
  }
};
