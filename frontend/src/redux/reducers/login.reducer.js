import * as loginConsts from "../consts/login.consts";

const initState = {
  isLogged: false,
};

const login = (state = initState, action) => {
  switch (action.type) {
    case loginConsts.LOGIN_FULFILLED:
      return { ...state, isLogged: action.payload.data };

    case loginConsts.LOGOUT:
      return { ...state, isLogged: action.payload };

    default:
      return state;
  }
};

export default login;
