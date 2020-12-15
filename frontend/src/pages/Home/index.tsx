import * as React from "react";
import "./index.scss";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <>
      <div className="Home">
        {/* <video
      id="background-video"
      loop
      autoPlay
      style={{ backgroundColor: "red", width: "100%", height: "100%" }}
    >
      <source src="/videos/bg_vid.mp4" type="video/mp4" />
      {/* <source
        src=""
        type="video/ogg"
      /> */}
        {/* -
      Your browser does not support the video tag. -
    </video> */}
      </div>
      <video width="100%" height={1600} autoPlay={true} muted loop>
        <source src="/videos/vid_3.mp4" type="video/mp4" />
      </video>
    </>
  );
}
