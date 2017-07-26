@projects.each do |project|
  json.set! project.id do
    json.id project.id
    json.title project.title
    json.description project.description
    json.thumbnail_url project.thumbnail_url
    json.user_id project.user_id
    json.user project.user.username
    json.likes project.likers.map(&:id)
  end
end
