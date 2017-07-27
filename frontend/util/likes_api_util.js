export const createLike = like => (
  $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: { like }
  })
);

export const destroyLike = like => (
  $.ajax({
    method: 'DELETE',
    url: '/api/likes',
    data: { like }
  })
);
