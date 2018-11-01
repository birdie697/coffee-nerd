class Preparation < ApplicationRecord
  has_many :users
  has_many :techniques
  has_many :coffees
end
