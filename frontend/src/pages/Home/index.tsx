import * as React from "react";
import "./index.scss";
import JokeCard from "../../components/JokeCard";

export interface IHomeProps {}

export interface IHomeState {}

export default class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div className="Home">
        <JokeCard />
      </div>
    );
  }
}
