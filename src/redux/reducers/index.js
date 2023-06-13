import { combineReducers } from "redux";

import login from "./login";
import signUp from './signUp';
import plan from './plan';
import membership from './membership';
import classes from './classes';
import profile from './profile';

export default combineReducers({
  login,
  signUp,
  plan,
  membership,
  classes,
  profile,
});
