class User < ApplicationRecord
	has_secure_password
    has_many :users_classrooms
    has_many :classrooms, through: :users_classrooms
end
