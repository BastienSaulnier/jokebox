import * as loginConsts from "../consts/login.consts";

const initState = {
  isLogged: false,
  token: null,
  error: null,
};

const login = (state = initState, action) => {
  switch (action.type) {
    case loginConsts.LOGIN_FULFILLED:
      return {
        ...state,
        isLogged: action.payload.data.isLogged,
        token: action.payload.data.token,
        error: action.payload.data.error,
      };

    case loginConsts.LOGOUT:
      return {
        ...state,
        isLogged: false,
        token: null,
        error: null,
      };

    default:
      return state;
  }
};

export default login;
