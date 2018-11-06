class Api::V1::PreparationsController < ApplicationController

  def index

    user_id = current_user.id
    technique_id = params[:technique]
    coffee_id = params[:coffee]
    servings = params[:servings]

    technique_name = Technique.find(technique_id).name
    coffee_name = Coffee.find(coffee_id).name

    water_weight = (servings.to_i*Constants::WATER_5OZ_TO_GRAMS).round

    binding.pry

    if Preparation.where(user_id: user_id, technique_id: technique_id, coffee_id: coffee_id).empty?

      adjusted_grind_size = Technique.find(technique_id).default_grind_size
      adjusted_ratio = Technique.find(technique_id).default_ratio
      coffee_weight = (water_weight/adjusted_ratio).round

      binding.pry

    else

      prep = Preparation.where(user_id: user_id, coffee_id: coffee_id, technique_id: technique_id).order(created_at: :desc).limit(1)

      if prep[0].flavor == "Bitter"
        adjusted_grind_size = Constants.adjust_grind_for_bitter(prep[0].adjusted_grind_size)
      elsif prep[0].flavor == "Underdeveloped"
        adjusted_grind_size = Constants.adjust_grind_for_underdeveloped(prep[0].adjusted_grind_size)
      else
        adjusted_grind_size = prep[0].adjusted_grind_size
      end

      if prep[0].strength == "Strong"
        adjusted_ratio = prep[0].adjusted_ratio + 0.5
      elsif prep[0].strength == "Weak"
        adjusted_ratio = prep[0].adjusted_ratio - 0.5
      else
        adjusted_ratio = prep[0].adjusted_ratio
      end

      coffee_weight = (water_weight/adjusted_ratio).round

      binding.pry

    end

    binding.pry

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
      flash[:notice] = "Your Coffee Experience Has Been Successfully Logged"
      render json: preparation
    else
      render json: { errors: preparation.errors.full_message }
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
