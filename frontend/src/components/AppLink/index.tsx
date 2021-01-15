import * as React from "react";
import "./index.scss";

import { NavLink } from "react-router-dom";

export interface IAppLinkProps {
  linkActiveClassName?: string;
  linkClassName?: string;
  linkLabel?: string;
  haveIcon?: boolean;
  linkIcon?: any;
  linkPath?: string;
  children?: any;
}

export default function AppLink(props: IAppLinkProps) {
  const {
    linkActiveClassName,
    linkClassName,
    linkLabel,
    haveIcon,
    linkIcon,
    linkPath,
    children,
  } = props;
  return (
    <NavLink
      exact
      to={linkPath}
      className={linkClassName}
      activeClassName={linkActiveClassName}
    >
      {haveIcon ? <div className="linkIcon">{linkIcon}</div> : null}
      {linkLabel || children}
    </NavLink>
  );
}
