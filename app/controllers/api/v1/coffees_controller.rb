class Api::V1::CoffeesController < ApplicationController

  def index
    render json: User.find(current_user.id).coffees.order(name: :asc)
  end

  def create
    submitted_coffee = Coffee.find_or_create_by!(name: coffee_params[:name])
    new_usercoffee_entry = Usercoffee.new(user_id: current_user.id, coffee: submitted_coffee)

    if new_usercoffee_entry.save

      render json: { title: "SUCCESS!",
                     text: "Your coffee has been added to your list",
                     id: submitted_coffee.id,
                     name: submitted_coffee.name}

    else
      #render json: { title:  "OOPS!", text: coffee.errors.full_messages.join(", ") }
      render json: { title:  "OOPS!", text: "Please submit a unique, non-blank coffee name" }
    end

  end

  private

    def coffee_params
      params.require(:coffee).permit(
        :name
      )
    end

end
