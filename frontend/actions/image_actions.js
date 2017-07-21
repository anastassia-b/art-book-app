import * as APIUtil from '../util/images_api_util';

export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';

export const receiveImages = images => ({
  type: RECEIVE_IMAGES,
  images
});

//pass parameter to fetchImages
export const fetchImages = () => dispatch => (
  APIUtil.fetchImages()
    .then(images => dispatch(receiveImages(images)))
);
