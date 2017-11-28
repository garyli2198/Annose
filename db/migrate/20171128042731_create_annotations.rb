class CreateAnnotations < ActiveRecord::Migration[5.1]
  def change
    create_table :annotations do |t|
      t.text :body
      t.references :user, foreign_key: true
      t.references :document, foreign_key: true

      t.timestamps
    end
  end
end
