class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :created_at
  # has_one :user
  # has_one :dog_gif
end
