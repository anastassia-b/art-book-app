import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from '../middleware/thunk_middleware';
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  )
);

export default configureStore;
