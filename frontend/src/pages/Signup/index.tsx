import * as React from "react";
import "./index.scss";

import AppForm from "../../components/AppForm";
import AppInput from "../../components/AppInput";

import {
  signUpInitialValues,
  signUpSchema,
} from "../../validations/signup.validation";
import { signUp } from "../../redux/actions/signup.actions";

export interface ISignupProps {}

export default function Signup(props: ISignupProps) {
  return (
    <div className="Signup">
      <div className="signupContent center">
        <h2>Sign up</h2>
        <div className="signupForm">
          <AppForm
            formValidationSchema={signUpSchema}
            formInitialValues={signUpInitialValues}
            formButtonLabel="Sign up"
            formAction={signUp}
          >
            <AppInput
              inputType="text"
              inputName="firstname"
              inputPlaceholder="Firstname"
            />
            <AppInput
              inputType="text"
              inputName="lastname"
              inputPlaceholder="Lastname"
            />
            <AppInput
              inputType="text"
              inputName="username"
              inputPlaceholder="Username"
            />
            <AppInput
              inputType="email"
              inputName="email"
              inputPlaceholder="Email address"
            />
            <AppInput
              inputType="password"
              inputName="password"
              inputPlaceholder="Password"
            />
            <AppInput
              inputType="password"
              inputName="passwordCheck"
              inputPlaceholder="Retype password"
            />
          </AppForm>
        </div>
      </div>
    </div>
  );
}
