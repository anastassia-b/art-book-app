export const createComment = comment => (
  $.ajax({
    method: "POST",
    url: "api/comments",
    data: comment
  })
);

export const deleteComment = commentId => (
  $.ajax({
    method: "DELETE",
    url: `/api/comments/${commentId}`
  })
);

export const fetchComments = data => (
  $.ajax({
    method: "GET",
    url: "api/comments",
    data
  })
);
