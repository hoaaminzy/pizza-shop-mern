import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzaReducer } from "./reducers/pizzaReducers";
import { cartReducer } from "./reducers/cartReducers";
import { registerUserReducer } from "./reducers/usdrReducers";
import { loginUserReducer } from "./reducers/usdrReducers";
import { placeOrderReducer } from "./reducers/orderReduces";
import { getUserOrdersReducer } from "./reducers/orderReduces";
import { getAllUsersReducer } from "./reducers/usdrReducers";
import { allUserOrdersReducer } from "./reducers/orderReduces";
import { addPizzaReducer } from "./reducers/pizzaReducers";
import { getPizzaByIdReducer } from "./reducers/pizzaReducers";
import { updatePizzaByIdReducer } from "./reducers/pizzaReducers";
const rootReducer = combineReducers({
  getAllPizzaReducer: getAllPizzaReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  getUserOrdersReducer: getUserOrdersReducer,
  placeOrderReducer: placeOrderReducer,
  getAllUsersReducer: getAllUsersReducer,
  allUserOrdersReducer: allUserOrdersReducer,
  addPizzaReducer: addPizzaReducer,
  getPizzaByIdReducer: getPizzaByIdReducer,
  updatePizzaByIdReducer: updatePizzaByIdReducer,
});
const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};

const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
