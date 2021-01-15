import * as loginConsts from "../consts/login.consts";
import { loginAPI } from "../../api/login.api";

export const login = (values) => ({
  type: loginConsts.LOGIN,
  payload: loginAPI(values),
});

export const logout = () => ({
  type: loginConsts.LOGOUT,
});
