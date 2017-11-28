class RenameMemberId < ActiveRecord::Migration[5.1]
  def change
    rename_column :classrooms_members, :member_id, :user_id
  end
end
