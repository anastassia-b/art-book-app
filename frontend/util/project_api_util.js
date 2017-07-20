export const fetchProjects = () => (
  $.ajax({
    method: 'GET',
    url: '/api/projects'
  })
);

export const fetchProjectDetail = id => (
  $.ajax({
    method: 'GET',
    url: `/api/projects/${id}`
  })
);
