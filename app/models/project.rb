class Project < ApplicationRecord
  validates :user_id, :title, :thumbnail_url, presence: true

  belongs_to :user, foreign_key: :user_id, class_name: 'User'
end
