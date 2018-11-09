class Api::V1::CoffeesController < ApplicationController

  def index
    render json: Coffee.order(name: :asc)
  end

  def create
    coffee = Coffee.new(coffee_params)
    if coffee.save

      render json: { title: "SUCCESS!",
                     text: "Your coffee has been added to the list",
                     id: coffee.id,
                     name: coffee.name}

    else
      #render json: { title:  "OOPS!", text: coffee.errors.full_messages.join(", ") }
      render json: { title:  "OOPS!", text: "Please submit a coffee name" }
    end

  end

  private

    def coffee_params
      params.require(:coffee).permit(
        :name
      )
    end

end
