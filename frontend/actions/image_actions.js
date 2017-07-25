import * as APIUtil from '../util/images_api_util';

export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';
export const CLEAR_IMAGES = 'CLEAR_IMAGES';

export const receiveImages = images => ({
  type: RECEIVE_IMAGES,
  images
});

export const clearImages = () => ({
  type: CLEAR_IMAGES
});

export const fetchImages = (id) => dispatch => (
  APIUtil.fetchImages(id)
    .then(images => dispatch(receiveImages(images)))
);
