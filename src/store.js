import { createStore, combineReducers } from "redux";
import { restaurantReducer } from "./Reducer/Reducer";

const rootReducer = combineReducers({
  restaurantReducer
});

const store = createStore(rootReducer);

export default store;
