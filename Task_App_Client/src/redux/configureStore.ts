import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/root.reducer";

export const store = createStore(
  RootReducer,
  // applyMiddleware(thunk),
);
