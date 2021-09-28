# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'bcrypt'

5.times do
	username = Faker::Internet.username
	# password_digest = ""
	password="password"
	# User.create!(username: username, password_digest: BCrypt::Password.create('password'))
	User.create!(username: username, password: password)

end

DogGif.create(img:"https://media.giphy.com/media/51Uiuy5QBZNkoF3b2Z/giphy.gif", tag: "Silly Dog")
DogGif.create(img:"https://media.giphy.com/media/M8PxVICV5KlezP1pGE/giphy.gif", tag: "Silly Dog")
DogGif.create(img:"https://media.giphy.com/media/1kkxWqT5nvLXupUTwK/giphy.gif", tag: "Silly Dog")
DogGif.create(img:"https://media.giphy.com/media/9s8Jq3Sc1ZnZS/giphy.gif", tag: "Silly Dog")
DogGif.create(img:"https://media.giphy.com/media/fnlXXGImVWB0RYWWQj/giphy.gif", tag: "Silly Dog")
DogGif.create(img:"https://media.giphy.com/media/yJHN2CCfPIw4o/giphy.gif", tag: "Silly Dog")
DogGif.create(img:"https://media.giphy.com/media/m0MfjLtKOgTPG/giphy.gif", tag: "Silly Dog")   
DogGif.create(img:"https://media.giphy.com/media/BdhtvnPILhdYs/giphy.gif", tag: "Silly Dog")
DogGif.create(img:"https://media.giphy.com/media/dTJd5ygpxkzWo/giphy.gif", tag: "Silly Dog")
DogGif.create(img:"https://media.giphy.com/media/WZP3qaxYj10gU/giphy.gif", tag: "Silly Dog")
DogGif.create(img:"https://media.giphy.com/media/naXyAp2VYMR4k/giphy.gif", tag: "Silly Dog")
DogGif.create(img:"https://media.giphy.com/media/ZNegC7wFpuQT7nurZ0/giphy.gif", tag: "Silly Dog")
DogGif.create(img:"https://media.giphy.com/media/2bUqez1VlOCInOZLTp/giphy.gif", tag: "Silly Dog")
DogGif.create(img:"https://media.giphy.com/media/IvjjgsEhnLCzm/giphy.gif", tag: "Silly Dog")   
DogGif.create(img:"https://media.giphy.com/media/77vjJEy9IRqJW/giphy.gif", tag: "Silly Dog")   
DogGif.create(img:"https://media.giphy.com/media/8dNZXw6LOlgnm/giphy.gif", tag: "Silly Dog")   
DogGif.create(img:"https://media.giphy.com/media/EVnf7prY7J8Wc/giphy.gif", tag: "Silly Dog")   
DogGif.create(img:"https://media.giphy.com/media/Htptc5cECryVHFtbaa/giphy.gif", tag: "Silly Dog") 
DogGif.create(img:"https://media.giphy.com/media/SB5fjrUhAeLte/giphy.gif", tag: "Silly Dog")   
DogGif.create(img:"https://media.giphy.com/media/JOjumF8rHUHINyKObk/giphy.gif", tag: "Silly Dog") 
DogGif.create(img:"https://media.giphy.com/media/DSUJYdg57fN4H6vbrF/giphy.gif", tag: "Silly Dog") 
DogGif.create(img:"https://media.giphy.com/media/5t3RY0RHLUV3RHKFkj/giphy.gif", tag: "Silly Dog") 
DogGif.create(img:"https://media.giphy.com/media/aSZSj0mT8f6tW/giphy.gif", tag: "Silly Dog")   
DogGif.create(img:"https://media.giphy.com/media/ZsqVl7DeLvQQw/giphy.gif", tag: "Silly Dog")   
DogGif.create(img:"https://media.giphy.com/media/gdUxfKtxSxqtq/giphy.gif", tag: "Silly Dog")   
DogGif.create(img:"https://media.giphy.com/media/MFYewrNPPkUzUUKVXa/giphy.gif", tag: "Silly Dog") 
DogGif.create(img:"https://media.giphy.com/media/kPtZXq7mv2uucjLKPt/giphy.gif", tag: "Silly Dog") 
DogGif.create(img:"https://media.giphy.com/media/l0NwscKPAiPjFcixG/giphy.gif", tag: "Silly Dog")
DogGif.create(img:"https://media.giphy.com/media/wvurizcBk3tmM/giphy.gif", tag: "Silly Dog")   
DogGif.create(img:"https://media.giphy.com/media/JXMn6T2f8Brl6/giphy.gif", tag: "Silly Dog")   
DogGif.create(img:"https://media.giphy.com/media/nQ8XtX3ctBCkE/giphy.gif", tag: "Silly Dog")   
DogGif.create(img:"https://media.giphy.com/media/0T1ozXIiCuBFtQ4tpj/giphy.gif", tag: "Silly Dog") 
DogGif.create(img:"https://media.giphy.com/media/3Owa0TWYqHi5RZYGql/giphy.gif", tag: "Silly Dog") 

10.times do
	user_id = User.ids.sample
	dog_gif_id = DogGif.ids.sample
	comment = Faker::Lorem.paragraph
	Comment.create!(user_id: user_id, dog_gif_id: dog_gif_id, comment:comment)
end

