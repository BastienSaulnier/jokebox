import * as React from "react";
import "./index.scss";

import {
  loginInitialValues,
  loginSchema,
} from "../../validations/login.validation";
import { login } from "../../redux/actions/login.actions";

import AppInput from "../../components/AppInput";
import AppForm from "../../components/AppForm";
import UserIcon from "../../assets/svg/UserIcon";
import UserPasswordIcon from "../../assets/svg/UserPasswordIcon";

export interface ILoginProps {}

export default function Login(props: ILoginProps) {
  return (
    <div className="Login">
      <div className="loginContent center">
        <h2>Login</h2>
        <div className="loginForm">
          <AppForm
            formValidationSchema={loginSchema}
            formInitialValues={loginInitialValues}
            formButtonLabel={"Login"}
            formAction={login}
          >
            <AppInput
              inputType="text"
              inputName="email"
              inputPlaceholder="User email"
              inputIcon={<UserIcon />}
              haveIcon
            />
            <AppInput
              inputType="password"
              inputName="password"
              inputPlaceholder="User password"
              inputIcon={<UserPasswordIcon />}
              haveIcon
            />
          </AppForm>
        </div>
      </div>
    </div>
  );
}
