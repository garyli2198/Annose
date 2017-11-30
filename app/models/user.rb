class User < ApplicationRecord
	has_secure_password
    has_many :users_classrooms
    has_many :classrooms, through: :users_classrooms
    has_many :annotations

    def owned_classrooms
        return Classroom.where(admin_id: self.id)
    end

end
