import React from "react";
import "./index.scss";

import { connect } from "react-redux";
import { login } from "../../redux/actions/login.actions";

import AppButton from "../../components/AppButton";
import AppInput from "../../components/AppInput";
import AppForm from "../../components/AppForm";

export interface ILoginProps {
  password?: string;
  email?: string;
  login?: any;
}

class Login extends React.Component<ILoginProps> {
  public render() {
    const { password, email, login } = this.props;
    return (
      <div className="Login">
        <h2>Login Page</h2>
        <AppForm
          formClassName="LoginForm"
          formAction={() => login(email, password)}
        >
          <AppInput
            inputId="loginEmailInput"
            inputType="text"
            inputName="username"
            inputPlaceholder="username"
          />
          <AppInput
            inputId="loginPasswordInput"
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
}

const mapStateToProps = (state) => ({
  email: state.inputs.loginEmailInput,
  password: state.inputs.loginPasswordInput,
});

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
