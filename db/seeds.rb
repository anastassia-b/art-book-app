User.destroy_all
Project.destroy_all
Image.destroy_all

guest = User.create(username: "guest", email: "guest@example.com", password: "password",
avatar_url: "https://lh4.ggpht.com/cfo9ApPG_DfKZ139O84XUGem1aXZL3cIGw9jB4cGpUprGNeEMav5TLBfq8sEZc8mHeY=w300")
anastassia = User.create(username: "anastassia", email: "anastassia@example.com", password: "password",
avatar_url: "http://www.iconsdb.com/icons/preview/red/square-ios-app-xxl.png")
david = User.create(username: "david", email: "david@example.com", password: "password",
avatar_url: "http://www.iconsdb.com/icons/preview/red/square-ios-app-xxl.png")
basquiat = User.create(username: "Jean Michel Basquiat", email: "basquiat@example.com", password: "password",
avatar_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500935387/408555E200000578-0-image-a-121_1495165491692_tefjt7.jpg")
mondrian = User.create(username: "Piet Mondrian", email: "mondrian@example.com", password: "password",
avatar_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500935470/Piet-Mondrian_vp3vmw.jpg")
robert = User.create(username: "Robert Rauschenberg", email: "robert@example.com", password: "password",
avatar_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500935589/_92727374_rauschenberg_bbc_mfk7io.jpg")
karl = User.create(username: "Karl Gerstner", email: "karl@example.com", password: "password",
avatar_url: "http://www.iconsdb.com/icons/preview/red/square-ios-app-xxl.png")
maiko = User.create(username: "Maiko Gubler", email: "maiko@example.com", password: "password",
avatar_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500935689/Maiko-Gubler-Artists-Chamber-Gallery_jkgaqx.jpg")
onchi = User.create(username: "Koshiro Onchi", email: "onchi@example.com", password: "password",
avatar_url: "http://www.iconsdb.com/icons/preview/red/square-ios-app-xxl.png")
kelly = User.create(username: "Ellsworth Kelly", email: "kelly@example.com", password: "password",
avatar_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500935787/Schjeldahl-Ellsworth-Kelly_fkahbk.jpg")
# louise = User.create(username: "louise", email: "louise@example.com", password: "password",
# avatar_url: "http://www.iconsdb.com/icons/preview/red/square-ios-app-xxl.png")
wayne = User.create(username: "Wayne Thiebaud", email: "wayne@example.com", password: "password",
avatar_url: "http://www.iconsdb.com/icons/preview/red/square-ios-app-xxl.png")
rothko = User.create(username: "Mark Rothko", email: "rothko@example.com", password: "password",
avatar_url: "http://www.iconsdb.com/icons/preview/red/square-ios-app-xxl.png")
egon = User.create(username: "Egon Schiele", email: "egon@example.com", password: "password",
avatar_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500935863/395b5a6ee5243c173cb86788f43fb35a_nhxa11.jpg")
whistler = User.create(username: "James Abbott McNeill Whistler", email: "whistler@example.com", password: "password",
avatar_url: "http://www.iconsdb.com/icons/preview/red/square-ios-app-xxl.png")
michele = User.create(username: "Michele Laurait", email: "michele@example.com", password: "password",
avatar_url: "http://www.iconsdb.com/icons/preview/red/square-ios-app-xxl.png")
munch = User.create(username: "Edvard Munch", email: "munch@example.com", password: "password",
avatar_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500935965/1200px-The_Scream_e7cgkp.jpg")
cy = User.create(username: "Cy Twombly", email: "cy@example.com", password: "password",
avatar_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500936030/Cy_Twombly_z1qjrz.jpg")
# pollock = User.create(username: "Jackson Pollock", email: "pollock@example.com", password: "password",
# avatar_url: "http://www.iconsdb.com/icons/preview/red/square-ios-app-xxl.png")
# francis = User.create(username: "francis", email: "francis@example.com", password: "password",
# avatar_url: "http://www.iconsdb.com/icons/preview/red/square-ios-app-xxl.png")


project0 = Project.create(user_id: maiko.id, title: "architecture", description: "About Making Architecture",
thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500599950/cylinder_ls_kibyeo.jpg")
Image.create(project_id: project0.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500599950/cylinder_ls_kibyeo.jpg")
Image.create(project_id: project0.id,
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500599840/371363f63e89e9bec8cb818e0d2ca92b_anpdqp.jpg")
Image.create(project_id: project0.id,
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500599920/blob_xpevvy.jpg")


project11 = Project.create(user_id: egon.id, title: "sonnenbaum", description: "Sonnenbaum",
thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500605945/dfffa8db35ba9a1b6d0951ab9f6fb5e3--art-flowers-painted-flowers_yq9q7p.jpg")
Image.create(project_id: project11.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500605945/dfffa8db35ba9a1b6d0951ab9f6fb5e3--art-flowers-painted-flowers_yq9q7p.jpg")
Image.create(project_id: project11.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500870763/Egon_Schiele_-_Wei_C3_9Fe_Chrysantheme_-_1910_u29xqd.jpg")
Image.create(project_id: project11.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500870870/sunflower-1909_meoim9.jpg")


project6 = Project.create(user_id: onchi.id, title: "untitled", description: "Untitled",
thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500604970/cbdd38b67a0414106523dcc88501e133_ymzeo6.jpg")
Image.create(project_id: project6.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500604970/cbdd38b67a0414106523dcc88501e133_ymzeo6.jpg")
# Image.create(project_id: project6.id, caption: "",
# img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500871204/4c39ee68f8a20b9425fa10b97c0644ff_zmdqmd.jpg")


project7 = Project.create(user_id: kelly.id, title: "yellow white", description: "Yellow White",
thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500605176/1f8a59f20d691bb596eeb955ad58b361--ellsworth-kelly-colorful-paintings_s3j7yh.jpg")
Image.create(project_id: project7.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500605176/1f8a59f20d691bb596eeb955ad58b361--ellsworth-kelly-colorful-paintings_s3j7yh.jpg")
Image.create(project_id: project7.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500871332/ellsworth-kelly-spectrum_0_nzfxjj.jpg")
Image.create(project_id: project7.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500871500/4184529029_5f67d11a55_b_u2viuf.jpg")
Image.create(project_id: project7.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500871592/f30570896c20e7c201dd6fb560f231f8_kl8err.jpg")


project8 = Project.create(user_id: wayne.id, title: "painting", description: "Painting",
thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500605501/b848d7e65f2a7e6ca7c86aadbc911665_eaatby.jpg")
Image.create(project_id: project8.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500605501/b848d7e65f2a7e6ca7c86aadbc911665_eaatby.jpg")
Image.create(project_id: project8.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500871940/DBqasL-VYAEr4Du_knacq9.jpg")
Image.create(project_id: project8.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500872095/a740e51ddfb1f9e3298aab3b2bab13f1_vuvgqe.jpg")


# project9 = Project.create(title: "accordion", description: "Louise Bourgeois | Insomnia drawings", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500605339/illusbourgeois_motnin.jpg", user_id: louise.id)
# Image.create(project_id: project9.id, caption: "",
# img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500605339/illusbourgeois_motnin.jpg")
# Image.create(project_id: project9.id, caption: "",
# img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500872297/Louise_18_olk9a1.jpg")


project10 = Project.create(title: "color", description: "Untitled", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500605775/78.2461_ph_web_rdfbq2.jpg", user_id: rothko.id)
Image.create(project_id: project10.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500605775/78.2461_ph_web_rdfbq2.jpg")
Image.create(project_id: project10.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500873490/image-43_imcgsq.jpg")
Image.create(project_id: project10.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500873838/ea364dac3c97c1e64eaffb0f1e01ac08_ikjyab.jpg")


project12 = Project.create(title: "untitled", description: "Flowers", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500606261/076509396cac954bc77496276a1fe697_xfcpce.jpg", user_id: mondrian.id)
Image.create(project_id: project12.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500606261/076509396cac954bc77496276a1fe697_xfcpce.jpg")
Image.create(project_id: project12.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500874056/46f38f8ff740c649030013a04a3f2ac6_rcodwg.jpg")
Image.create(project_id: project12.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500874135/0f9342f988d9d8d4e45cc16796f7bcc5_nou5jh.jpg")


project13 = Project.create(title: "nocturne in black and gold", description: "Nocturne in Black and Gold", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500606396/6d5f3ccfea930fbedb5868125c2dafb1_tkcdcn.jpg", user_id: whistler.id)
Image.create(project_id: project13.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500606396/6d5f3ccfea930fbedb5868125c2dafb1_tkcdcn.jpg")
Image.create(project_id: project13.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500874366/864c926eafb2ee1e4c8f30ebeb98e2b7_q3uopc.jpg")
Image.create(project_id: project13.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500874445/5984177430f5e50f915421f1fb6cbe37_ciz0jo.jpg")
Image.create(project_id: project13.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500874510/adcf2e915d785df95c8bb22e9c5c030c_iic1bn.jpg")


# project14 = Project.create(title: "untitled", description: "Mixed Media (Untitled)", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500606868/8c866a28f5e0e74632344d47127127da_goawcl.jpg", user_id: michele.id)
# Image.create(project_id: project14.id, caption: "",
# img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500606868/8c866a28f5e0e74632344d47127127da_goawcl.jpg")
# Image.create(project_id: project14.id, caption: "",
# img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500874685/06BeyondReturn-HiRes_cokcsw.jpg")


project5 = Project.create(title: "flowers", description: "Flowers", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500604706/fd0ea2c03246d83b135b6d061581b2d9_t035wq.jpg", user_id: mondrian.id)
Image.create(project_id: project5.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500604706/fd0ea2c03246d83b135b6d061581b2d9_t035wq.jpg")
Image.create(project_id: project5.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500874158/46eabc90a46d60a93d995123e50f313c_w6146j.jpg")


project1 = Project.create(title: "untitled", description: "Culture Night Los Angeles", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500596172/Basquiat-1981-acrylic-marker-paper-collage-oil-paint-stick-and-crayon-on-paper_damae3.jpg", user_id: basquiat.id)
Image.create(project_id: project1.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500596172/Basquiat-1981-acrylic-marker-paper-collage-oil-paint-stick-and-crayon-on-paper_damae3.jpg")
Image.create(project_id: project1.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500875034/9822c2fc2ea86f2a510948d274feffd4_jacpw9.jpg")
Image.create(project_id: project1.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500875058/94d7a5003e229bae36145806bca33604_zgyo66.jpg")
Image.create(project_id: project1.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500875116/93ba4d8e374836e4b1d0485a173ed842_mps8y4.jpg")


project2 = Project.create(title: "orange cloud", description: "Orange Cloud", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500590558/tumblr_mlti98EBYE1ru2qa4o1_1280_s9wp8e.png", user_id: mondrian.id)
Image.create(project_id: project2.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500590558/tumblr_mlti98EBYE1ru2qa4o1_1280_s9wp8e.png")
Image.create(project_id: project2.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500875242/107b4b2729309c8fd5d29eb9c648f43c_rjrkjv.jpg")
Image.create(project_id: project2.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500875260/6365540_mondrian8_lp2zuq.jpg")


project3 = Project.create(title: "white stone in black", description: "White Stone in Black", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500596399/576fe26aa2c7a094bcc5dcb583f7a9a8_b7kkrq.jpg", user_id: robert.id)
Image.create(project_id: project3.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500596399/576fe26aa2c7a094bcc5dcb583f7a9a8_b7kkrq.jpg")
Image.create(project_id: project3.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500875417/11f9c89ce66a8bd1202927dd8de0e6e3_ywh77e.jpg")
Image.create(project_id: project3.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500875441/10a5073da77c9df2a8a585beb504b736_v7gdhp.jpg")
Image.create(project_id: project3.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500875520/705205c22e3aa412646e8b37df639f00_zz1wbo.jpg")

project4 = Project.create(title: "color sounds", description: "Color Sounds", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500604529/9e88d7ed10073bdddd7882267484063f_qw0tpp.jpg", user_id: karl.id)
Image.create(project_id: project4.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500604529/9e88d7ed10073bdddd7882267484063f_qw0tpp.jpg")
Image.create(project_id: project4.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500875661/f7e2f48abba06d5db375355a1d3191d4_h6gycj.jpg")
Image.create(project_id: project4.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500875680/b67059568f59dfec536371fb0e3b9e32_ldpnvf.jpg")

project15 = Project.create(title: "solen", description: "Solen", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500610605/Munchs_20Solen_evfwtg.jpg", user_id: munch.id)
Image.create!(project_id: project15.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500610605/Munchs_20Solen_evfwtg.jpg")


project16 = Project.create!(title: "Il Parnasso", description: "Il Parnasso", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500610992/3_q7chvp.jpg", user_id: cy.id)
Image.create!(project_id: project16.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500610992/3_q7chvp.jpg")
Image.create!(project_id: project16.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500875901/039a548734f119b90b88ce781ebb3141_vnkupw.jpg")
Image.create!(project_id: project16.id, caption: "",
img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500875924/db7ea7688ae6a74447673b6f1b183d47_mali1i.jpg")


# project17 = Project.create!(title: "autumn rhythm", description: "Autumn Rhythm", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500613637/autumn-rhythm_mnenc2.jpg", user_id: pollock.id)
# Image.create!(project_id: project17.id, caption: "",
# img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500613637/autumn-rhythm_mnenc2.jpg")
# Image.create!(project_id: project17.id, caption: "",
# img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500876011/fb188a52914265d7c02d1fe18120f997_cdu9qs.jpg")
# Image.create!(project_id: project17.id, caption: "",
# img_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_scale,w_680/v1500876029/d00f634c7d804f07a8cdbfc667dbaef2_eaa1ho.jpg")


# project18 = Project.create(title: "dame", description: "Francis Picabia | Dame!", thumbnail_url: "http://res.cloudinary.com/dvcd3fe9t/image/upload/c_fill,h_300,w_300/v1500613899/Francis_Picabia_2C_Dame_21_Illustration_for_the_cover_of_the_periodical_Dadaphone_n._7_2C_Paris_2C_March_1920_l5uuim.jpg", user_id: francis.id)
# Image.create(project_id: project18, caption: "",
# img_url: "")
# Image.create(project_id: project18, caption: "",
# img_url: "")
# Image.create(project_id: project18, caption: "",
# img_url: "")

Like.create(user_id: basquiat.id, project_id: project11.id)
Like.create(user_id: basquiat.id, project_id: project8.id)
Like.create(user_id: basquiat.id, project_id: project13.id)
Like.create(user_id: mondrian.id, project_id: project7.id)
Like.create(user_id: mondrian.id, project_id: project15.id)
Like.create(user_id: mondrian.id, project_id: project13.id)
Like.create(user_id: robert.id, project_id: project0.id)
Like.create(user_id: robert.id, project_id: project1.id)
Like.create(user_id: robert.id, project_id: project16.id)
Like.create(user_id: karl.id, project_id: project0.id)
Like.create(user_id: karl.id, project_id: project13.id)
Like.create(user_id: karl.id, project_id: project1.id)
Like.create(user_id: maiko.id, project_id: project8.id)
Like.create(user_id: maiko.id, project_id: project12.id)
Like.create(user_id: maiko.id, project_id: project1.id)
Like.create(user_id: onchi.id, project_id: project11.id)
Like.create(user_id: onchi.id, project_id: project12.id)
Like.create(user_id: onchi.id, project_id: project4.id)
Like.create(user_id: kelly.id, project_id: project0.id)
Like.create(user_id: kelly.id, project_id: project12.id)
Like.create(user_id: kelly.id, project_id: project16.id)
Like.create(user_id: wayne.id, project_id: project11.id)
Like.create(user_id: wayne.id, project_id: project10.id)
Like.create(user_id: wayne.id, project_id: project0.id)
Like.create(user_id: rothko.id, project_id: project11.id)
Like.create(user_id: rothko.id, project_id: project4.id)
Like.create(user_id: rothko.id, project_id: project16.id)
Like.create(user_id: egon.id, project_id: project12.id)
Like.create(user_id: egon.id, project_id: project15.id)
Like.create(user_id: egon.id, project_id: project5.id)
Like.create(user_id: whistler.id, project_id: project11.id)
Like.create(user_id: whistler.id, project_id: project3.id)
Like.create(user_id: whistler.id, project_id: project5.id)
Like.create(user_id: michele.id, project_id: project8.id)
Like.create(user_id: michele.id, project_id: project13.id)
Like.create(user_id: michele.id, project_id: project2.id)
Like.create(user_id: munch.id, project_id: project12.id)
Like.create(user_id: munch.id, project_id: project13.id)
Like.create(user_id: munch.id, project_id: project5.id)
Like.create(user_id: cy.id, project_id: project7.id)
Like.create(user_id: cy.id, project_id: project8.id)
Like.create(user_id: cy.id, project_id: project10.id)
