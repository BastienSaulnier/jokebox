import * as React from "react";
import "./index.scss";

import { Link } from "react-router-dom";

export interface IAppLinkProps {
  linkClassName?: string;
  linkLabel?: string;
  withIcon?: boolean;
  linkPath?: string;
  iconUrl?: string;
  children?: any;
}

export default function AppLink(props: IAppLinkProps) {
  const {
    linkClassName,
    linkLabel,
    withIcon,
    linkPath,
    iconUrl,
    children,
  } = props;
  return (
    <Link to={linkPath} className={linkClassName}>
      {withIcon ? (
        <img src={iconUrl} className="AppLinkIcon" alt={`${linkLabel} Icon`} />
      ) : null}
      {linkLabel || children}
    </Link>
  );
}
