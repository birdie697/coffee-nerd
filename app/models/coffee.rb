class Coffee < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true

  has_many :preparations
  has_many :usercoffees
  has_many :users, through: :usercoffees
end
