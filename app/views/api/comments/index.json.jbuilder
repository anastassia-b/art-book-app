@comments.each do |comment|
  json.set! comment.id do
    json.id comment.id
    json.body comment.body
    json.user_id comment.user_id
    json.project_id comment.project_id
    json.username comment.user.username
    json.user_avatar_url comment.user.avatar_url
  end
end
