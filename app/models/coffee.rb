class Coffee < ApplicationRecord
  validates :name, presence: true

  belongs_to :preparation
end
