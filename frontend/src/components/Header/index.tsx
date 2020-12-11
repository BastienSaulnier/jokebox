import * as React from "react";
import "./index.scss";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <div className="Header ">
      <div className="HeaderContent center">
        <h1>LaBwat'àBlag</h1>
      </div>
    </div>
  );
}
