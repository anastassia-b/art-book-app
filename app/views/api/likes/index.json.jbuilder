@likes.each do |like|
  json.set! like.id do
    json.id like.id
    json.user_id like.user_id
    json.project_id like.project_id
  end
end
