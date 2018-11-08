class Api::V1::PreparationsController < ApplicationController

  def index

    user_id = current_user.id
    technique_id = params[:technique]
    coffee_id = params[:coffee]
    servings = params[:servings]

    coffee_name = Coffee.find(coffee_id).name
    technique_name = Technique.find(technique_id).name



    water_weight = (servings.to_i*Constants::WATER_5OZ_TO_GRAMS).round

    if Preparation.where(user_id: user_id, technique_id: technique_id, coffee_id: coffee_id).empty?

      adjusted_grind_size = Technique.find(technique_id).default_grind_size
      adjusted_ratio = Technique.find(technique_id).default_ratio
      coffee_weight = (water_weight/adjusted_ratio).round

    else

      prep = Preparation.where(user_id: user_id, coffee_id: coffee_id, technique_id: technique_id).order(created_at: :desc).limit(1)

      adjusted_grind_size = Constants.get_new_grind(prep[0].flavor, prep[0].adjusted_grind_size)
      adjusted_ratio = Constants.get_new_ratio(prep[0].strength, prep[0].adjusted_ratio)
      coffee_weight = (water_weight/adjusted_ratio).round

    end

    render json: {servings: servings,
                  technique_name: technique_name,
                  coffee_name: coffee_name,
                  water_weight: water_weight,
                  coffee_weight: coffee_weight,
                  adjusted_grind_size: adjusted_grind_size,
                  adjusted_ratio: adjusted_ratio}
  end

  def create

    preparation = Preparation.new(preparation_params)

    if preparation.save
      render json: { title: "SUCCESS!", text: "Your coffee experience has been logged"}
    else
      #render json: { title:  "OOPS!", text: preparation.errors.full_messages.join(", ")}
      render json: { title:  "OOPS!", text: "Please 'Click For Results' before clicking 'Save'"}
    end

  end

  private

    def preparation_params
      params.require(:preparation).permit(
        :user_id,
        :technique_id,
        :coffee_id,
        :servings,
        :water_amount,
        :coffee_amount,
        :adjusted_ratio,
        :strength,
        :adjusted_grind_size,
        :flavor
      )
    end
end
