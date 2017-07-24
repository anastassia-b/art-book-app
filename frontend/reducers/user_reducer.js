import { RECEIVE_USER } from '../actions/user_actions';
import { merge } from 'lodash';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_USER:
      return action.user;
    default:
      return newState;
  }
};

export default userReducer;
