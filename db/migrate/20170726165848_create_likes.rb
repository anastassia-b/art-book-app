class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :project_id, null: false
      t.timestamps null: false
    end
    add_index :likes, :user_id
    add_index :likes, :project_id
    add_index :likes, [:user_id, :project_id], unique: true
  end
end
