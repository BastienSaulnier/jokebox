import * as React from "react";
import "./index.scss";

import AppLink from "../AppLink/index";
import UserMonitor from "../UserMonitor/index";

export interface INavProps {}

export default function Nav(props: INavProps) {
  const isLogged = true;
  return (
    <nav className="Nav">
      {isLogged ? (
        <UserMonitor />
      ) : (
        <>
          <AppLink
            linkPath="login"
            linkLabel="Login"
            linkClassName="PrimaryButton"
          />
          <AppLink
            linkPath="signup"
            linkLabel="Sign up"
            linkClassName="SecondaryButton"
          />
        </>
      )}
    </nav>
  );
}
