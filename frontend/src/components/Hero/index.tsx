import React from "react";
import "./index.scss";

/* import Bubble from "../Bubble"; */

interface IHeroProps {}

interface IHeroState {
  heroHeight?: any;
  screenWidth?: any;
  screenHeight?: any;
}

export default class Hero extends React.Component<IHeroProps, IHeroState> {
  constructor(props) {
    super(props);
    this.state = { screenWidth: 0, screenHeight: 0, heroHeight: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    let heroHeight = document.getElementById("hero").clientHeight;
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      heroHeight: heroHeight,
    });
  }

  render() {
    /* const data = [
      {
        artist: "Enei",
        backgroundUrl:
          "https://i1.sndcdn.com/avatars-pNrxJfpXDyIO2dge-3Kfztg-t200x200.jpg",
      },
      {
        artist: "Noisia",
        backgroundUrl:
          "https://i1.sndcdn.com/avatars-000451809714-n5njwk-t200x200.jpg",
      },
      {
        artist: "Emperor",
        backgroundUrl:
          "https://i1.sndcdn.com/avatars-000673119167-2qz6n5-t200x200.jpg",
      },
      {
        artist: "Phace",
        backgroundUrl:
          "https://i1.sndcdn.com/avatars-XLS9zKRs0DXOIXux-nyb8TA-t200x200.jpg",
      },
      {
        artist: "White Peach Records",
        backgroundUrl:
          "https://i1.sndcdn.com/avatars-000323860567-p84z3l-t200x200.jpg",
      },
      {
        artist: "Phossa",
        backgroundUrl:
          "https://i1.sndcdn.com/avatars-BCFkzsy40TzZGWmW-4GYLCw-t200x200.jpg",
      },
      {
        artist: "Flo",
        backgroundUrl:
          "https://i1.sndcdn.com/avatars-yzBV52v1ZccuDzyU-FraPDQ-t200x200.jpg",
      },
      {
        artist: "Data3",
        backgroundUrl:
          "https://i1.sndcdn.com/avatars-000633158562-yjd0ff-t200x200.jpg",
      },
      {
        artist: "Arkaik",
        backgroundUrl:
          "https://i1.sndcdn.com/avatars-000528299388-740ojo-t200x200.jpg",
      },
      {
        artist: "IvyL Lab",
        backgroundUrl:
          "https://i1.sndcdn.com/avatars-nInZ3WBryJoMmHYG-SJB29w-t200x200.jpg",
      },
    ];
    const { screenWidth } = this.state; */
    return (
      <div id="hero" className="Hero">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 64.9">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#686de0" stopOpacity="1" />
              <stop offset="100%" stopColor="#e056fd" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg> */}

        <svg
          className="svgContainer"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="1440px"
          height="50px"
          viewBox="0 0 1440 50"
        >
          {/* background-image: linear-gradient( 110.2deg,  rgba(54,197,240,1) 8.2%, rgba(74,21,75,1) 92.4% ); */}
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                stopColor=" rgba(54,197,240,1)"
                stopOpacity="1"
              />
              <stop
                offset="100%"
                stopColor="rgba(74,21,75,0.5)"
                stopOpacity="1"
              />
            </linearGradient>
          </defs>
          <path
            className="wave w1"
            d="M0,32.63c75.12,17.66,187.99,34.68,323.76,16.56c43.89-5.86,60.59-11.44,96.32-18.3
	c217.32-41.72,279.69,34.16,500.74,23.53c160.48-7.71,193.14-50.86,366.91-38.34c64.21,4.62,116.88,14.63,152.26,22.66V0H0V32.63z"
          />
          <path
            className="wave w2"
            d="M0,27.53c50.25-5.29,125.01-10.89,215.68-8.82c149.42,3.41,192.91,24.26,316.18,29.41
	c175.76,7.35,156.77-32.13,345.59-30.15c150.44,1.58,193.33,26.97,372.06,25.74c80.14-0.55,146.13-6.17,190.5-11.03V0H0V27.53z"
          />
          <path
            className="wave w3"
            d="M0,41.5C88.74,24.44,222.37,6,384.79,12.82c158.34,6.65,166.35,29.84,325.74,36.03
	c187.69,7.28,240.87-22.38,473.53-25c110.71-1.25,200.4,4.32,255.94,8.82V0H0V41.5z"
          />
          <path
            className="wave w4"
            d="M0,20.91c161.85,29.13,291.5,28.31,380.38,22.06c120.93-8.5,154.02-26.17,277.94-25.74
	c158.57,0.55,155.34,29.66,299.16,26.54c127.86-2.77,164.1-26.51,306.73-25.07c75.33,0.76,136.65,8.1,175.79,13.97V0H0V20.91z"
          />

          {/* <animateTransform
            attributeName="transform"
            from="0 0"
            to="-300 0"
            begin="0s"
            dur="5s"
            repeatCount="indefinite"
            type="translate"
          /> */}
        </svg>
        <img src="" alt="" />
      </div>
    );
  }
}
