import { createStore, applyMiddleware } from 'redux';
import thunk from '../middleware/thunk_middleware';
import RootReducer from '../reducers/root_reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  import logger from 'redux-logger';
  middlewares.push(logger);
}

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(...middlewares))
);

export default configureStore;
