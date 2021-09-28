class User < ApplicationRecord
	has_secure_password

	validates :username, presence: true, uniqueness: true, length: {minimum: 2}	
	validates :password, presence: true, length: {minimum: 2}

	has_many :comments, dependent: :destroy
end
