class AddKeyToClassrooms < ActiveRecord::Migration[5.1]
  def change
    add_column :classrooms, :key, :string
  end
end
