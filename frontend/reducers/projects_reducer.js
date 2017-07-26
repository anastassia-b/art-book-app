import { RECEIVE_PROJECTS, RECEIVE_PROJECT } from '../actions/project_actions';
import { merge } from 'lodash';

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
    //maybe clear projects before this
      const newProject = {[action.project.id]: action.project};
      return merge({}, state, newProject);
    default:
      return newState;
  }
};

export default projectsReducer;
