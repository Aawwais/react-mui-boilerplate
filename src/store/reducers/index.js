// Root Reducer

import { combineReducers } from "redux";
import authReducer from "./authReducer";

export let rootReducer = combineReducers({
  authUser: authReducer,
});

export default rootReducer;
