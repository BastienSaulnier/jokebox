import * as React from "react";
import "./index.scss";

import { Link } from "react-router-dom";

export interface ILoginProps {
  path?: string;
  label?: string;
  linkClassName?: string;
}

export default function Nav(props: ILoginProps) {
  const { path, label, linkClassName } = props;
  return (
    <Link to={path} className={linkClassName}>
      {label}
    </Link>
  );
}
