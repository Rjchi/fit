import { combineReducers } from "redux";

import login from "./login";
import signUp from './signUp';
import plan from './plan';

export default combineReducers({
  login,
  signUp,
  plan,
});
