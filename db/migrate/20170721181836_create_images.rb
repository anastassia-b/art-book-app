class CreateImages < ActiveRecord::Migration[5.1]
  def change
    create_table :images do |t|
      t.string :img_url, null: false
      t.string :caption
      t.integer :project_id, null: false
      t.timestamps null: false
    end

    add_index :images, :project_id
  end
end
