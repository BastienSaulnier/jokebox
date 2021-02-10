import React from "react";
import "./index.scss";

import FeedCard from "../FeedCard/index";

export interface IFeedTimelineProps {}

export default function FeedTimeline(props: IFeedTimelineProps) {
  return (
    <ul className="FeedTimeline">
      <FeedCard />
    </ul>
  );
}
