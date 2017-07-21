import { RECEIVE_IMAGES } from '../actions/image_actions';
import { merge } from 'lodash';

const imagesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_IMAGES:
      return action.images;
    default:
      return newState;
  }
};

export default imagesReducer;
