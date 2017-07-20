import * as APIUtil from '../util/projects_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT_DETAIL = 'RECEIVE_PROJECT_DETAIL';

export const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const receiveProjectDetail = project => ({
  type: RECEIVE_PROJECT_DETAIL,
  project
});

export const fetchProjects = () => dispatch => (
  APIUtil.fetchProjects()
    .then(projects => dispatch(receiveProjects(projects)))
);

export const fetchProjectDetail = id => dispatch => (
  APIUtil.fetchProjectDetail(id)
    .then(project => dispatch(receiveProjectDetail(project)))
);
