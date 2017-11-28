class AddEndIndexToAnnotations < ActiveRecord::Migration[5.1]
  def change
    add_column :annotations, :end_index, :integer
  end
end
