class DropClassroomMembers < ActiveRecord::Migration[5.1]
  def change
    drop_table :classrooms_members
  end
end
