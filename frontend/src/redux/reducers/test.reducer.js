import * as testConsts from "../consts/test.consts";

const initState = {
  test_key: "",
};

const test = (state = initState, action) => {
  switch (action.type) {
    case testConsts.TEST_ACTION_FULFILLED:
      return { ...state, test_key: action.payload.data };

    default:
      return state;
  }
};

export default test;
