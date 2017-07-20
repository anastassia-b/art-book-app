@projects.each do |project|
  json.set! project.id do
    json.id project.id
    json.title project.title
    json.description project.description
    json.thumbnail_url project.thumnail_url
    json.user project.user_id.username
  end
end
