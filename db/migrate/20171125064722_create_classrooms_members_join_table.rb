class CreateClassroomsMembersJoinTable < ActiveRecord::Migration[5.1]
  def change
    create_table :classrooms_members, id: false do |t|
      t.integer :classroom_id
      t.integer :member_id
    end
  end
end
