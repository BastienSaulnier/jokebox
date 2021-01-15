import { put } from "redux-saga/effects";
import history from "../../history";

import { getUser } from "../actions/user.actions";

export function* handleLogin(action) {
  const { success, error } = action.payload.data;

  if (success) {
    yield put(getUser());
    yield setTimeout(() => {
      history.push("/home");
    }, 200);
  } else if (error.api) {
  }
}
