import * as React from "react";
import "./index.scss";

import AppForm from "../../components/AppForm";
import AppInput from "../../components/AppInput";

export interface ISignupProps {}

export default function Signup(props: ISignupProps) {
  return (
    <div className="Signup">
      <h2>Signup page</h2>
      <AppForm formClassName="LoginForm" formSubmitAction={""}>
        <AppInput
          inputId="signupLastnameInput"
          inputType="text"
          inputName="lastname"
          inputPlaceholder="lastname"
        />
        <AppInput
          inputId="signupFirstnameInput"
          inputType="text"
          inputName="firstname"
          inputPlaceholder="firstname"
        />
        <AppInput
          inputId="signupUsernameInput"
          inputType="text"
          inputName="username"
          inputPlaceholder="username"
        />
        <AppInput
          inputId="signupEmailInput"
          inputType="email"
          inputName="email"
          inputPlaceholder="email address"
        />
        <AppInput
          inputId="signupPasswordInput"
          inputType="password"
          inputName="password"
          inputPlaceholder="password"
        />
        <AppInput
          inputId="signupRePasswordInput"
          inputType="password"
          inputName="re-password"
          inputPlaceholder="retype password"
        />
        <AppInput
          inputType="submit"
          inputName="submit"
          inputSubmitLabel="signup"
        />
      </AppForm>
    </div>
  );
}
