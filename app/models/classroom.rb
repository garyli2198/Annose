class Classroom < ApplicationRecord
    has_many :users_classrooms
    has_many :users, through: :users_classrooms
    has_many :documents
end
