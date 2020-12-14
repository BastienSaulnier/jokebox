import * as React from "react";
import "./index.scss";

import AppButton from "../../components/AppButton";
import AppInput from "../../components/AppInput";
import AppForm from "../../components/AppForm";

export interface ILoginProps {}

export default function Login(props: ILoginProps) {
  const loginSubmit = (e) => {
    e.preventDefault();
    console.log("coucou du submit login");
  };

  return (
    <div className="Login">
      <h2>Login Page</h2>
      <AppForm
        formClassName="LoginForm"
        formSubmitAction={(e) => loginSubmit(e)}
      >
        <AppInput
          inputType="text"
          inputName="username"
          inputPlaceholder="username"
        />
        <AppInput
          inputType="password"
          inputName="password"
          inputPlaceholder="password"
        />
        <AppButton
          buttonClassName="loginSubmitButton"
          buttonLabel="Login"
          buttonType="submit"
        />
      </AppForm>
    </div>
  );
}
