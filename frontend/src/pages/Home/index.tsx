import * as React from "react";
import "./index.scss";

import { testActionAPI } from "../../api/test.api";

export interface IHomeProps {}

export default function Nav(props: IHomeProps) {
  return (
    <div className="Home">
      Home page
      <button onClick={() => testActionAPI()}>NODE_ENV</button>
    </div>
  );
}
