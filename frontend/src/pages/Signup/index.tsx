import * as React from "react";
import "./index.scss";

import AppButton from "../../components/AppButton";
import AppForm from "../../components/AppForm";
import AppInput from "../../components/AppInput";

export interface ISignupProps {}

export default function Signup(props: ISignupProps) {
  const signupSubmit = (e) => {
    e.preventDefault();
    console.log("coucou du submit signup");
  };

  return (
    <div className="Signup">
      <h2>Signup page</h2>
      <AppForm
        formClassName="LoginForm"
        formSubmitAction={(e) => signupSubmit(e)}
      >
        <AppInput
          inputType="text"
          inputName="lastname"
          inputPlaceholder="lastname"
        />
        <AppInput
          inputType="text"
          inputName="firstname"
          inputPlaceholder="firstname"
        />
        <AppInput
          inputType="text"
          inputName="username"
          inputPlaceholder="username"
        />
        <AppInput
          inputType="email"
          inputName="email"
          inputPlaceholder="email address"
        />
        <AppInput
          inputType="password"
          inputName="password"
          inputPlaceholder="password"
        />
        <AppInput
          inputType="password"
          inputName="re-password"
          inputPlaceholder="retype password"
        />
        <AppButton
          buttonClassName="loginSubmitButton"
          buttonLabel="Signup"
          buttonType="submit"
        />
      </AppForm>
    </div>
  );
}
