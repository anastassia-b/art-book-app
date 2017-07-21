@images.each do |image|
  json.set! image.id do
    json.id image.id
    json.caption image.caption
    json.project_id image.project_id
    json.img_url image.img_url
  end
end
