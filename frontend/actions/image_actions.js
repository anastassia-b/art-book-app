import * as APIUtil from '../util/images_api_util';

export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';

export const receiveImages = images => ({
  type: RECEIVE_IMAGES,
  images
});

//pass parameter to fetchImages, check logic.
export const fetchImages = (projectId) => dispatch => (
  APIUtil.fetchImages(projectId)
    .then(images => dispatch(receiveImages(images)))
);
