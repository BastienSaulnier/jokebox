import * as React from "react";
import "./index.scss";

export interface IPrimaryButtonProps {
  label?: string;
  buttonAction?: any;
}

export interface IPrimaryButtonState {}

export default class PrimaryButton extends React.Component<
  IPrimaryButtonProps,
  IPrimaryButtonState
> {
  constructor(props: IPrimaryButtonProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const { label, buttonAction } = this.props;
    return (
      <button className="PrimaryButton" onClick={buttonAction}>
        {label}
      </button>
    );
  }
}
