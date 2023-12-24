import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers/root.reducer";
import { RootState } from "../interfaces";

export const store = createStore<RootState, any , any, any, any>(rootReducer, applyMiddleware(thunk));
