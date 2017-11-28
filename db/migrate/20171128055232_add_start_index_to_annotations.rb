class AddStartIndexToAnnotations < ActiveRecord::Migration[5.1]
  def change
    add_column :annotations, :start_index, :integer
  end
end
