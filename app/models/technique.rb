class Technique < ApplicationRecord
  validates :name, :default_ratio, :default_grind_size, presence: true

  has_many :preparations
end
