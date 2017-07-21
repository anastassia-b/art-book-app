export const fetchImages = data => (
  $.ajax({
    method: 'GET',
    url: '/api/images',
    data
  })
);
