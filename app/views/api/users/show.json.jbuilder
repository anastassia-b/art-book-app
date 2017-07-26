json.extract! @user, :id, :username, :description, :avatar_url
json.likes @user.likes.map(&:project_id)
