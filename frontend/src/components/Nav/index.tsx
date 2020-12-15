import React from "react";
import "./index.scss";

import AppLink from "../AppLink/index";
import UserMonitor from "../UserMonitor/index";

export interface INavProps {
  isLogged?: boolean;
}

export default function Nav(props: INavProps) {
  const { isLogged } = props;
  return (
    <nav className="Nav">
      {isLogged ? (
        <UserMonitor />
      ) : (
        <>
          <AppLink
            linkPath="/"
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
