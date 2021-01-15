import * as signUpConsts from "../consts/signup.consts";
import { signUpAPI } from "../../api/signup.api";

export const signUp = (values) => ({
  type: signUpConsts.SIGN_UP,
  payload: signUpAPI(values),
});
