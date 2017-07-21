import { values } from 'lodash';

export const selectAllProjects = ({ projects }) => values(projects);
//unsure about image selection
export const selectImages = ({ images }) => values(images);
