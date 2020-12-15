import * as inputConsts from "../consts/inputs.consts";

export const setInputValue = (inputId, inputValue) => ({
  type: inputConsts.SET_INPUT_VALUE,
  payload: { inputId, inputValue },
});

export const resetInputValue = (inputId) => ({
  type: inputConsts.RESET_INPUT_VALUE,
  payload: inputId,
});
