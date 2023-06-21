import { combineReducers } from "redux";

import login from "./login";
import signUp from './signUp';
import plan from './plan';
import membership from './membership';
import classes from './classes';
import profile from './profile';
import filter from './filter';
import customers from './customers';
import update from './update';
import updateMem from './updateMem';
import delete_ from './delete_';
import deleteMem from './deleteMem';
import createP from './createP';
import memberships from './memberships';
import createC from './createC';
import classesList from './classesList';
import updateCla from './updateCla';
import deleteCla from './deleteCla';

export default combineReducers({
  login,
  signUp,
  plan,
  membership,
  classes,
  profile,
  filter,
  createP,
  createC,
  customers,
  update,
  updateMem,
  delete_,
  memberships,
  deleteMem,
  classesList,
  updateCla,
  deleteCla,
});
