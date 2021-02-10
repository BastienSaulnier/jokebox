import * as React from "react";
import "./index.scss";

import FeedTimeline from "../../components/FeedTimeline/index";

export interface IHomeProps {}

export default class Home extends React.Component<IHomeProps> {
  render() {
    return (
      <div className="Home">
        <div className="homeContent center">
          <h2>Homepage</h2>
          <div className="feedTimelineContainer">
            <FeedTimeline />
          </div>
        </div>
      </div>
    );
  }
}
