import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import {routerMiddleware} from "connected-react-router";
import {createBrowserHistory} from "history";

import rootReducer from "App/__store__/rootReducer";
import rootSaga from "App/__store__/rootSaga";

export const history = createBrowserHistory();

const configureStore = () => {
  const initialState = {};
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware, routerMiddleware(history)];

  const store = createStore(
    rootReducer(history),
    initialState,
    composeWithDevTools(
      applyMiddleware(...middleware),
    ),
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore();
