class Like < ApplicationRecord
  validates :user_id, :project_id, presence: true
  validates :project_id, uniqueness: { scope: :user_id }
  
  belongs_to :user
  belongs_to :project
end
