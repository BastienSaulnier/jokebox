import * as React from "react";
import Nav from "../Nav";
import "./index.scss";

import Link from "../Link/index";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <div className="Header ">
      <div className="headerContent center">
        <h1>
          <Link path="/" label="Logo" linkClassName="IndexButton" />
        </h1>
        <div className="navContainer">
          <p>{process.env.NODE_ENV}</p>
          <Nav />
        </div>
      </div>
    </div>
  );
}
