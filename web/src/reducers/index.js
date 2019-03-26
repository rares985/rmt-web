import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default history =>
  combineReducers({
    router: connectRouter(history),
    rootReducer
  });
