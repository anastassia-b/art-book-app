import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from '../middleware/thunk_middleware';
import RootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, logger)
  )
);

export default configureStore;
