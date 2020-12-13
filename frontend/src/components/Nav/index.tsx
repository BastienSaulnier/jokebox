import * as React from "react";
import "./index.scss";

import Link from "../Link/index";

export interface INavProps {}

export default function Nav(props: INavProps) {
  return (
    <nav className="Nav ">
      <Link path="login" label="Login" linkClassName="PrimaryButton" />
      <Link path="signup" label="Sign up" linkClassName="SecondaryButton" />
    </nav>
  );
}
