import * as React from "react";
import Nav from "../Nav";
import "./index.scss";

import AppLink from "../AppLink/index";

export interface IHeaderProps {
  isLogged?: boolean;
}

export default function Header(props: IHeaderProps) {
  const { isLogged } = props;

  return (
    <div className="Header ">
      <div className="headerContent center">
        <h1>
          <AppLink
            linkPath={isLogged ? "/home" : "/"}
            linkLabel="Logo"
            linkClassName="IndexButton"
          />
        </h1>
        <Nav isLogged={isLogged} />
      </div>
    </div>
  );
}
