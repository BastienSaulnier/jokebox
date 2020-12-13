import * as React from "react";
import "./index.scss";

export interface IHomeProps {}

export default function Nav(props: IHomeProps) {
  return (
    <div className="Home">
      Home page
      <button onClick={() => console.log(process.env.NODE_ENV)}>
        NODE_ENV
      </button>
    </div>
  );
}
