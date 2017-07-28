import * as APIUtil from "../util/comment_api_util";

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment)
    .then(comment => dispaatch(receiveComment(comment)))
);

export const deleteComment = commentId => dispatch => (
  APIUtil.deleteComment(commentId)
    .then(comment => dispatch(removeComment(comment)))
);
