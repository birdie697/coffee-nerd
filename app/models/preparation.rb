class Preparation < ApplicationRecord

  validates :water_amount, :coffee_amount, :adjusted_ratio, :adjusted_grind_size, presence: true

  belongs_to :user
  belongs_to :technique
  belongs_to :coffee
end
