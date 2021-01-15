import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";

import AppRouterLayout from "./components/AppRouterLayout";

import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import axios from "axios";

axios.defaults.withCredentials = true;
// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    const { token } = store.getState().login;

    if (token !== null) {
      config.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      config.headers.common["Authorization"] = null;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// Catch UNAUTHORIZED response
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      store.dispatch({
        type: "UNAUTHORIZED",
        error: error.response,
      });
    }
    return Promise.reject(error);
  }
);

const { isLogged } = store.getState().login;
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <AppRouterLayout isLogged={isLogged} />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
