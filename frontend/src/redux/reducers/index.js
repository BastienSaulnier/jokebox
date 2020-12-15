import { combineReducers } from "redux";
import test from "./test.reducer";
import login from "./login.reducer";
import inputs from "./inputs.reducer";

export default combineReducers({ test, login, inputs });
