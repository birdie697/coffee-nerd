class Technique < ApplicationRecord
  validates :name, :default_ratio, :default_grind_size, presence: true

  belongs_to :preparation
end
