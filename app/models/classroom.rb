class Classroom < ApplicationRecord
    has_many :users_classrooms
    has_many :users, through: :users_classrooms
    has_many :documents
    belongs_to :admin, class_name: :User

    def get_key
        return Digest::SHA1.hexdigest(self.to_s)
    end
end
