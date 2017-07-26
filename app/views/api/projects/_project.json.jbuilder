json.extract! project, :id, :title, :description, :thumbnail_url, :user_id
json.user project.user.username
json.likes project.likers.map(&:id)

#Currently never fetching a single project!
