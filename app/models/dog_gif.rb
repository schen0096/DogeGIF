class DogGif < ApplicationRecord
	has_many :comments, dependent: :destroy
	has_many :users, through: :comments

	validates :img, presence: true, uniqueness: true, length: {minimum: 2}

end
