import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";

const isDev = true;
export const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

const devTools =  window.devToolsExtension ?
  window.devToolsExtension() : f => f;

export default (initialState) => createStore(
  rootReducer,
  initialState,
  ...[isDev ? compose(middleware, devTools) : middleware]
);
