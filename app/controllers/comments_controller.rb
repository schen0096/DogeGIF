class CommentsController < ApplicationController
	# GET /comments/
	def index
		comments = Comment.all
		render json: comments, status: :ok
	end

	# GET /comments/:id
	def show 
		comment = find_comment
		render json: comment, status: :ok
	end
	
	# POST /comments/:id
	def create
		comment = Comment.create!(comment_params)
		render json: comment, status: :created
	end
	
	# PATCH /comments/:id
	def update
		comment = find_comment
		# if session[:user] == post.user.id
			comment.update!(comment_params)
			render json: comment, status: :accepted
		# else
		# 	render json: {errors: ["Not authorized"] }, status: :unauthorized
		# end
	end

	# DELETE /comments/:id
	def destroy
		comment = find_comment
		# if session[:user] == post.user.id
			comment.destroy
			head :no_content
		# end
	
	end

	private 

	def find_comment 
		Comment.find(params[:id])
	end

	def comment_params
		params.permit(:comment, :user_id, :dog_gif_id)
	end

end
