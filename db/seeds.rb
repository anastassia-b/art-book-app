User.destroy_all
Project.destroy_all
Image.destroy_all

guest = User.create(username: "guest", email: "guest@example.com", password: "password")
anastassia = User.create(username: "anastassia", email: "anastassia@example.com", password: "password")
david = User.create(username: "david", email: "david@example.com", password: "password")
basquiat = User.create(username: "basquiat", email: "basquiat@example.com", password: "password")
mondrian = User.create(username: "mondrian", email: "mondrian@example.com", password: "password")
robert = User.create(username: "robert", email: "robert@example.com", password: "password")
karl = User.create(username: "karl", email: "karl@example.com", password: "password")
maiko = User.create(username: "maiko", email: "maiko@example.com", password: "password")
onchi = User.create(username: "onchi", email: "onchi@example.com", password: "password")
kelly = User.create(username: "kelly", email: "kelly@example.com", password: "password")
louise = User.create(username: "louise", email: "louise@example.com", password: "password")
wayne = User.create(username: "wayne", email: "wayne@example.com", password: "password")
rothko = User.create(username: "rothko", email: "rothko@example.com", password: "password")
egon = User.create(username: "egon", email: "egon@example.com", password: "password")
whistler = User.create(username: "whistler", email: "whistler@example.com", password: "password")
michele = User.create(username: "michele", email: "michele@example.com", password: "password")
munch = User.create(username: "munch", email: "munch@example.com", password: "password")
cy = User.create(username: "cy", email: "cy@example.com", password: "password")
pollock = User.create(username: "pollock", email: "pollock@example.com", password: "password")
francis = User.create(username: "francis", email: "francis@example.com", password: "password")


project6 = Project.create(title: "untitled", description: "Koshiro Onchi | Untitled", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500604970/cbdd38b67a0414106523dcc88501e133_ymzeo6.jpg", user_id: onchi.id)
project7 = Project.create(title: "yellow white", description: "Ellsworth Kelly | Yellow White", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500605176/1f8a59f20d691bb596eeb955ad58b361--ellsworth-kelly-colorful-paintings_s3j7yh.jpg", user_id: kelly.id)
project8 = Project.create(title: "painting", description: "Wayne Thiebaud | Painting", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500605501/b848d7e65f2a7e6ca7c86aadbc911665_eaatby.jpg", user_id: wayne.id)
project9 = Project.create(title: "accordion", description: "Louise Bourgeois | Insomnia drawings", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500605339/illusbourgeois_motnin.jpg", user_id: louise.id)
project10 = Project.create(title: "color", description: "Mark Rothko | Untitled", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500605775/78.2461_ph_web_rdfbq2.jpg", user_id: rothko.id)
project11 = Project.create(title: "sonnenbaum", description: "Egon Schiele | Sonnenbaum", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500605945/dfffa8db35ba9a1b6d0951ab9f6fb5e3--art-flowers-painted-flowers_yq9q7p.jpg", user_id: egon.id)
project12 = Project.create(title: "untitled", description: "Piet Mondrian | Flowers", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500606261/076509396cac954bc77496276a1fe697_xfcpce.jpg", user_id: mondrian.id)
project13 = Project.create(title: "nocturne in black and gold", description: "James Abbott McNeill Whistler | Nocturne in Black and Gold", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500606396/6d5f3ccfea930fbedb5868125c2dafb1_tkcdcn.jpg", user_id: whistler.id)
project14 = Project.create(title: "untitled", description: "Michele Laurait | Mixed Media (Untitled)", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500606868/8c866a28f5e0e74632344d47127127da_goawcl.jpg", user_id: michele.id)
project0 = Project.create(title: "architecture", description: "Maiko Gubler | About Making Architecture", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500599950/cylinder_ls_kibyeo.jpg", user_id: maiko.id)
project1 = Project.create(title: "untitled", description: "Jean Michel Basquiat | Culture Night Los Angeles", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500596172/Basquiat-1981-acrylic-marker-paper-collage-oil-paint-stick-and-crayon-on-paper_damae3.jpg", user_id: basquiat.id)
project2 = Project.create(title: "orange cloud", description: "Piet Mondrian | Orange Cloud", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500590558/tumblr_mlti98EBYE1ru2qa4o1_1280_s9wp8e.png", user_id: mondrian.id)
project3 = Project.create(title: "white stone in black", description: "Robert Rauschenberg | White Stone in Black", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500596399/576fe26aa2c7a094bcc5dcb583f7a9a8_b7kkrq.jpg", user_id: robert.id)
project4 = Project.create(title: "color sounds", description: "Karl Gerstner | Color Sounds", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500604529/9e88d7ed10073bdddd7882267484063f_qw0tpp.jpg", user_id: karl.id)
project5 = Project.create(title: "flowers", description: "Piet Mondrian | Flowers", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500604706/fd0ea2c03246d83b135b6d061581b2d9_t035wq.jpg", user_id: mondrian.id)

project15 = Project.create(title: "solen", description: "Edvard Munch | Solen", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500610605/Munchs_20Solen_evfwtg.jpg", user_id: munch.id)
project16 = Project.create(title: "Il Parnasso", description: "Cy Towombly | Il Parnasso", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500610992/3_q7chvp.jpg", user_id: cy.id)
project16 = Project.create(title: "autum rhythm", description: "Jackson Pollock | Autumn Rhythm", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500613637/autumn-rhythm_mnenc2.jpg", user_id: pollock.id)
project16 = Project.create(title: "dame", description: "Francis Picabia | Dame!", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500613899/Francis_Picabia_2C_Dame_21_Illustration_for_the_cover_of_the_periodical_Dadaphone_n._7_2C_Paris_2C_March_1920_l5uuim.jpg", user_id: francis.id)


image0 = Image.create(img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500599950/cylinder_ls_kibyeo.jpg",
                      project_id: project0.id)
image1 = Image.create(img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500599840/371363f63e89e9bec8cb818e0d2ca92b_anpdqp.jpg",
                      project_id: project0.id)
image2 = Image.create(img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500599920/blob_xpevvy.jpg",
                      project_id: project0.id)
