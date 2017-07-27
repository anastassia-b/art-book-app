import * as APIUtil from '../util/projects_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const CLEAR_PROJECTS = 'CLEAR_PROJECTS';

export const clearProjects = () => ({
  type: CLEAR_PROJECTS
});

export const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

export const fetchProjects = () => dispatch => (
  APIUtil.fetchProjects()
    .then(projects => dispatch(receiveProjects(projects)))
);

export const fetchProject = id => dispatch => (
  APIUtil.fetchProject(id)
    .then(project => dispatch(receiveProject(project)))
);
