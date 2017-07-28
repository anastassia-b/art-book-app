import { values } from 'lodash';

export const selectAllProjects = ({ projects }) => values(projects);
export const selectImages = ({ images }) => values(images);
export const selectComments = ({ comments }) => values(comments);
export const selectProjectsByLikes = ({ projects, user }) => (
  user.likes
    .map(projectId => projects[projectId])
    .filter(project => project)
);
