import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT, CLEAR_COMMENTS } from '../actions/comment_actions';
import { merge } from 'lodash';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  // let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      const newComment = {[action.comment.id]: action.comment};
      return merge({}, state, newComment);
    // case REMOVE_COMMENT:
    //   return
    case CLEAR_COMMENTS:
      return {};
    default:
      return state;
  }
};

export default commentsReducer;
