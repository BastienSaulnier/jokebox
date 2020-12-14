import * as React from "react";
import "./index.scss";

import { Link } from "react-router-dom";

export interface IAppLinkProps {
  linkClassName?: string;
  linkLabel?: string;
  linkPath?: string;
}

export default function AppLink(props: IAppLinkProps) {
  const { linkClassName, linkLabel, linkPath } = props;
  return (
    <Link to={linkPath} className={linkClassName}>
      {linkLabel}
    </Link>
  );
}
