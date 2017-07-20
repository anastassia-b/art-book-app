User.destroy_all
Project.destroy_all

guest = User.create(username: "guest", email: "guest@example.com", password: "password")
anastassia = User.create(username: "anastassia", email: "anastassia@example.com", password: "password")
david = User.create(username: "david", email: "david@example.com", password: "password")
basquiat = User.create(username: "basquiat", email: "basquiat@example.com", password: "password")
mondrian = User.create(username: "mondrian", email: "mondrian@example.com", password: "password")

project1 = Project.create(title: "art", description: "art", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/q_80/v1500590409/b7522b06cd68edff76e299b4c27d191f_qhvura.jpg", user_id: basquiat.id,)
project2 = Project.create(title: "orange cloud", description: "art", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/v1500590558/tumblr_mlti98EBYE1ru2qa4o1_1280_s9wp8e.png", user_id: mondrian.id,)
