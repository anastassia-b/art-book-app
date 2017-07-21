User.destroy_all
Project.destroy_all

guest = User.create(username: "guest", email: "guest@example.com", password: "password")
anastassia = User.create(username: "anastassia", email: "anastassia@example.com", password: "password")
david = User.create(username: "david", email: "david@example.com", password: "password")
basquiat = User.create(username: "basquiat", email: "basquiat@example.com", password: "password")
mondrian = User.create(username: "mondrian", email: "mondrian@example.com", password: "password")
robert = User.create(username: "robert", email: "robert@example.com", password: "password")


project1 = Project.create(title: "untitled", description: "Jean Michel Basquiat | Culture Night Los Angeles", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500596172/Basquiat-1981-acrylic-marker-paper-collage-oil-paint-stick-and-crayon-on-paper_damae3.jpg", user_id: basquiat.id,)
project2 = Project.create(title: "orange cloud", description: "Piet Mondrian | Orange Cloud", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500590558/tumblr_mlti98EBYE1ru2qa4o1_1280_s9wp8e.png", user_id: mondrian.id,)
project2 = Project.create(title: "white stone in black", description: "Robert Rauschenberg | White Stone in Black", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500596399/576fe26aa2c7a094bcc5dcb583f7a9a8_b7kkrq.jpg", user_id: robert.id,)
