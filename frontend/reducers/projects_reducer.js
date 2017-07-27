import { RECEIVE_PROJECTS, RECEIVE_PROJECT, CLEAR_PROJECTS } from '../actions/project_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/likes_actions';
import { merge } from 'lodash';

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  const like = action.like;

  switch(action.type) {
    case RECEIVE_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      const newProject = {[action.project.id]: action.project};
      return merge({}, state, newProject);
    case CLEAR_PROJECTS:
      return {};
    case RECEIVE_LIKE:
      if (!state[like.project_id].likes.includes(like.user_id)) {
        newState[like.project_id].likes.push(like.user_id);
      }
      return newState;
    case REMOVE_LIKE:
      if (state[like.project_id].likes.includes(like.user_id)) {
        let position = newState[like.project_id].likes.indexOf(like.user_id);
        newState[like.project_id].likes.splice(position, 1);
      }
      return newState;
    default:
      return state;
  }
};

export default projectsReducer;
