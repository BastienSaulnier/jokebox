import { createStore, applyMiddleware } from "redux";
/* import { routerMiddleware } from "react-router-redux"; */
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
/* import { createBrowserHistory } from "history"; */
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

/* export const history = createBrowserHistory(); */

/* const middlewares = [promise, thunk, routerMiddleware(history)]; */
const middlewares = [promise, thunk];
const enhancers = [];

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

let store = createStore(
  persistReducer(persistConfig, reducers),
  composeWithDevTools(applyMiddleware(...middlewares, ...enhancers))
);

let persistor = persistStore(store);

export { store, persistor };
