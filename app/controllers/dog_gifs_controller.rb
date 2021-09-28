class DogGifsController < ApplicationController

	# GET /dog_gifs
	def index
		dog_gifs = Dog_Gif.all
		render json: comments, status: :ok
	end
	
	# GET /dog_gifs/:id
	def show 
		dog_gif = find_dog_gif
		render json: dog_gif, status: :ok
	end

	# POST /dog_gifs/:id
	def create
		dog_gif = Dog_Gif.create!(comment_params)
		render json: dog_gif, status: :created
	end

	private 

	def find_dog_gif 
		Comment.find(params[:id])
	end

	def dog_gif_params
		params.permit(:img, :tag)
	end

end
