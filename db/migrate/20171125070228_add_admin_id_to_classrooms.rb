class AddAdminIdToClassrooms < ActiveRecord::Migration[5.1]
  def change
    add_column :classrooms, :admin_id, :integer
  end
end
