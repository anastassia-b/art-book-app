import { createStore, applyMiddleware } from 'redux';
import thunk from '../middleware/thunk_middleware';
import RootReducer from '../reducers/root_reducer';
import Segment from '../middleware/segment';

const middlewares = [thunk, Segment];

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(...middlewares))
);

export default configureStore;
