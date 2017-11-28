class Document < ApplicationRecord
  belongs_to :classroom
  has_many :annotations
end
