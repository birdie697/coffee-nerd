class Preparation < ApplicationRecord
  belongs_to :user
  belongs_to :technique
  belongs_to :coffee
end
