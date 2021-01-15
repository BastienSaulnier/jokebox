import * as signUpConsts from "../consts/signup.consts";
import * as loginConsts from "../consts/login.consts";

const initState = {};

const signUp = (state = initState, action) => {
  switch (action.type) {
    case signUpConsts.SIGN_UP_FULFILLED:
      return { ...state };

    case loginConsts.LOGOUT:
      return state;

    default:
      return state;
  }
};

export default signUp;
