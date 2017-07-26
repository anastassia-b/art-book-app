class Project < ApplicationRecord
  validates :user_id, :title, :thumbnail_url, presence: true

  belongs_to :user, foreign_key: :user_id, class_name: 'User'
  has_many :images, dependent: :destroy

  has_many :likes
  has_many :likers, through: :likes, source: :user
end
