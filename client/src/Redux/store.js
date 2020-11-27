import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import AuthReducer from "./Login_Register/Reducer"
//import AppReducer from "./Employee/reducer"
import thunk from "redux-thunk";

const rootReducer = combineReducers({auth:AuthReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
