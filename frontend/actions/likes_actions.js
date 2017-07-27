import * as APIUtil from '../util/likes_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});

export const likeProject = like => dispatch => (
  APIUtil.createLike(like).then(like => (
    dispatch(receiveLike(like))
  ))
);

export const unlikeProject = like => dispatch => (
  APIUtil.destroyLike(like).then(like => (
    dispatch(removeLike(like))
  ))
);
