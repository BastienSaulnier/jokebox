import * as React from "react";

import { connect } from "react-redux";
import {
  resetInputValue,
  setInputValue,
} from "../../redux/actions/inputs.actions";

export interface IAppInputProps {
  inputStoreDispatch?: any;
  inputSubmitLabel?: string;
  inputPlaceholder?: string;
  resetInputValue?: any;
  setInputValue?: any;
  inputValue?: any;
  inputType?: string;
  inputName?: string;
  inputId?: string;
}

class AppInput extends React.Component<IAppInputProps> {
  componentWillUnmount = async () => {
    const { resetInputValue, inputId } = this.props;
    await resetInputValue(inputId);
  };

  public render() {
    const {
      inputSubmitLabel,
      inputPlaceholder,
      setInputValue,
      inputValue,
      inputType,
      inputName,
      inputId,
    } = this.props;

    return (
      <input
        id={inputId}
        type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        value={inputType === "submit" ? inputSubmitLabel : inputValue.inputId}
        onChange={(e) => setInputValue(inputId, e.target.value)}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  inputValue: state.inputs,
});

const mapDispatchToProps = (dispatch) => ({
  setInputValue: (inputId, inputValue) =>
    dispatch(setInputValue(inputId, inputValue)),
  resetInputValue: (inputId) => dispatch(resetInputValue(inputId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppInput);
