class Image < ApplicationRecord
  validates :img_url, :project_id, presence: true

  belongs_to :project
  has_one :user, through: :project, source: :user
end
