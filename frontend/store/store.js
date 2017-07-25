import { createStore, applyMiddleware } from 'redux';
import thunk from '../middleware/thunk_middleware';
import RootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk, logger))
  )
);

export default configureStore;
