import * as React from "react";
import Nav from "../Nav";
import "./index.scss";

import AppLink from "../AppLink/index";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <div className="Header ">
      <div className="headerContent center">
        <h1>
          <AppLink linkPath="/" linkLabel="Logo" linkClassName="IndexButton" />
        </h1>
        <div className="navContainer">
          <Nav />
        </div>
      </div>
    </div>
  );
}
