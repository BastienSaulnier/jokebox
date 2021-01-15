import { combineReducers } from "redux";
import login from "./login.reducer";
import signUp from "./signup.reducer";
import user from "./user.reducer";

export default combineReducers({ login, signUp, user });
