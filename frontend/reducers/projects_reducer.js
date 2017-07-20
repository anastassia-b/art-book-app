import { RECEIVE_PROJECTS, RECEIVE_PROJECT_DETAIL } from '../actions/project_actions';
import { merge } from 'lodash';

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT_DETAIL:
      return action.project;
    default:
      return newState;
  }
};

export default projectsReducer;
