class Project < ApplicationRecord
  validates :user_id, :title, :thumbnail_url, presence: true
end
