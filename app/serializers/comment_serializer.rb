class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :dog_gif_id, :created_at
  # has_one :user
  # has_one :dog_gif
end
