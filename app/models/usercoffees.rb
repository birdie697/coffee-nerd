class Usercoffees < ApplicationRecord

  belongs_to :user
  belongs_to :coffee
  
end
