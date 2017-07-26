export const fetchProjects = () => (
  $.ajax({
    method: 'GET',
    url: '/api/projects'
  })
);

export const fetchProject = id => (
  $.ajax({
    method: 'GET',
    url: `/api/projects/${id}`
  })
);
