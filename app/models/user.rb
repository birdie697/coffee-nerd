class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable


  after_create :load_generic_coffees, on: :create

  has_many :preparations
  has_many :usercoffees
  has_many :coffees, through: :usercoffees

  private
    def load_generic_coffees
      newest_user = User.order(created_at: :desc).limit(1).pluck(:id)[0]
      Usercoffee.create(user_id: newest_user, coffee_id: Coffee.where(name: "Generic Light Roast").pluck(:id)[0])
      Usercoffee.create(user_id: newest_user, coffee_id: Coffee.where(name: "Generic Medium Roast").pluck(:id)[0])
      Usercoffee.create(user_id: newest_user, coffee_id: Coffee.where(name: "Generic Dark Roast").pluck(:id)[0])
    end
end
