class Classroom < ApplicationRecord
    has_and_belongs_to_many :members, class_name: :User, foriegn_key: :member_id
end
