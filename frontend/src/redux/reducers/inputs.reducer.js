import * as inputConsts from "../consts/inputs.consts";

const initState = {
  loginEmailInput: "",
  loginPasswordInput: "",
  signupLastnameInput: "",
  signupFirstnameInput: "",
  signupUsernameInput: "",
  signupEmailInput: "",
  signupPasswordInput: "",
  signupRePasswordInput: "",
};

const inputs = (state = initState, action) => {
  switch (action.type) {
    case inputConsts.SET_INPUT_VALUE:
      return {
        ...state,
        [action.payload.inputId]: action.payload.inputValue,
      };

    case inputConsts.RESET_INPUT_VALUE:
      return {
        ...state,
        [action.payload]: "",
      };

    default:
      return state;
  }
};

export default inputs;
