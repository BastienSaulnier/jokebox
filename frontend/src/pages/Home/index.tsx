import * as React from "react";
import "./index.scss";

import { API_URL } from "../../api/init.api";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div className="Home">
      <h1>Home page</h1>
      <p>
        {process.env.NODE_ENV} : {API_URL}
      </p>
    </div>
  );
}
