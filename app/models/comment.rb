class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :dog_gif
end
