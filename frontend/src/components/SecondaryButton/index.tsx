import * as React from "react";

export interface ISecondaryButtonProps {
  label?: string;
  buttonAction?: any;
}

export interface ISecondaryButtonState {}

export default class SecondaryButton extends React.Component<
  ISecondaryButtonProps,
  ISecondaryButtonState
> {
  constructor(props: ISecondaryButtonProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const { label, buttonAction } = this.props;
    return (
      <button className="SecondaryButton" onClick={buttonAction}>
        {label}
      </button>
    );
  }
}
