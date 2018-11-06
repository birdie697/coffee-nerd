class Coffee < ApplicationRecord
  validates :name, presence: true

  has_many :preparations
end
