import * as loginConsts from "../consts/login.consts";
import { loginAPI } from "../../api/login.api";

export const login = (emailValue, passwordValue) => ({
  type: loginConsts.LOGIN,
  payload: loginAPI(emailValue, passwordValue),
});

export const logout = () => ({
  type: loginConsts.LOGOUT,
  payload: false,
});
