import * as React from "react";

export interface IAppInputProps {
  inputSubmitLabel?: string;
  inputPlaceholder?: string;
  inputType?: string;
  inputName?: string;
}

export interface IAppInputState {
  inputValue?: string;
}

export default class AppInput extends React.Component<
  IAppInputProps,
  IAppInputState
> {
  constructor(props: IAppInputProps) {
    super(props);

    this.state = {
      inputValue: "",
    };
  }

  handleChange = (e) =>
    this.setState({
      inputValue: e.target.value,
    });

  public render() {
    const { inputValue } = this.state;
    const {
      inputSubmitLabel,
      inputPlaceholder,
      inputType,
      inputName,
    } = this.props;
    return (
      <input
        type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        value={inputType === "submit" ? inputSubmitLabel : inputValue}
        onChange={(e) => this.handleChange(e)}
      />
    );
  }
}
