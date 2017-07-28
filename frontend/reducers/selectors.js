import { values } from 'lodash';

export const selectAllProjects = ({ projects }) => values(projects);
export const selectImages = ({ images }) => values(images);
export const selectComments = ({ comments }) => values(comments);
