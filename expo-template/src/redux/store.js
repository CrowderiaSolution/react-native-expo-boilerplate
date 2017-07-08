import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const middlewares = [
  promiseMiddleware(),
];

if (__DEV__) { // eslint-disable-line

  middlewares.push(createLogger());
}

export default createStore(
  reducers,
  undefined,
  compose(applyMiddleware(...middlewares))
);
