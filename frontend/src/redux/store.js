import { persistStore, persistReducer } from "redux-persist";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers/index";
import storage from "redux-persist/lib/storage";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import sagas from "./sagas/index";
/* import { routerMiddleware } from "react-router-redux"; */
/* import { createBrowserHistory } from "history"; */

/* export const history = createBrowserHistory(); */
/* const middlewares = [promise, thunk, routerMiddleware(history)]; */

const sagaMiddleware = createSagaMiddleware();
const middlewares = [promise, thunk, sagaMiddleware];
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
sagaMiddleware.run(sagas);

export { store, persistor };
