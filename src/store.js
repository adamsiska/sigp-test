import { createStore, compose, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epics/rootEpic';
import { reducers } from './store/index';

const epicMiddleware = createEpicMiddleware();

const initialState = {};

const middlewares = [
  epicMiddleware,
];

const composeEnhancers = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancers = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(reducers, initialState, enhancers);
epicMiddleware.run(rootEpic);
export { store };
