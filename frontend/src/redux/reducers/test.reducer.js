import * as testConsts from "../consts/test.consts";

const initState = {
  test_key: 0,
};

const articles = (state = initState, action) => {
  switch (action.type) {
    case testConsts.TEST_ACTION_FULFILLED:
      return { ...state, test_key: state.test_key + 1 };

    default:
      return state;
  }
};

export default articles;
