class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :project_id, null: false
      t.string :body, null: false
      t.timestamps null: false
      t.index :user_id
      t.index :project_id
    end
  end
end
