class Coffee < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true

  has_many :preparations
end
