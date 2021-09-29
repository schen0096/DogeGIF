class DogGifsController < ApplicationController

	# GET /doggif
	def index
		dog_gifs = DogGif.all
		render json: dog_gifs, status: :ok
	end
	
	# GET /doggif/:id
	def show 
		dog_gif = find_dog_gif
		render json: dog_gif, status: :ok
	end

	# POST /doggif/:id
	def create
		dog_gif = DogGif.create!(dog_gif_params)
		render json: dog_gif, status: :created
	end

	private 

	def find_dog_gif 
		DogGif.find(params[:id])
	end

	def dog_gif_params
		params.permit(:img, :tag)
	end

end
