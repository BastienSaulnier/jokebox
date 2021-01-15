import { takeLatest } from "redux-saga/effects";

import { handleLogin } from "../sagas/login.sagas";

export default function* sagas() {
  yield takeLatest("LOGIN_FULFILLED", handleLogin);
}
