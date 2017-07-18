class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :avatar_url
      t.string :description
      t.timestamps null: false
    end

    add_index :users, :username, unique: true
  end
end
