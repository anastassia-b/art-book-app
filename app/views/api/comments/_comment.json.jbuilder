json.extract! comment, :id, :body, :user_id, :project_id
json.username comment.user.username
json.user_avatar_url comment.user.avatar_url
