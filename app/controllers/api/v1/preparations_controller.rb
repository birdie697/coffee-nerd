class Api::V1::PreparationsController < ApplicationController
  def index

    user_id = current_user.id
    technique_id = params[:technique]
    coffee_id = params[:coffee]
    servings = params[:servings]

    if !Preparation.where(user_id: user_id, technique_id: technique_id, coffee_id: coffee_id).empty?
      prep = Preparation.where(user_id: user_id, coffee_id: coffee_id, technique_id: technique_id).order(created_at: :desc).limit(1)

      if prep.strength == "Strong"
        adjusted_ratio = prep.adjusted_ratio + 0.5
      elsif prep.strength == "Weak"
        adjusted_ratio = prep.adjusted_ratio - 0.5
      else
        adjusted_ratio = prep.adjusted_ratio
      end

      if prep.flavor == "Bitter"
        adjusted_grind_size = Constants::adjust_grind_for_bitter(prep.adjusted_grind_size)
      elsif prep.flavor == "Underdeveloped"
        adjusted_grind_size = Constants::adjsut_grind_for_underdeveloped(prep.adjusted_grind_size)
      else
        adjusted_grind_size = prep.adjusted_grind_size
      end

      water = (servings*Constants::WATER_5OZ_TO_GRAMS).round
      coffee = (water/adjusted_ratio).round
      grind_size = adjusted_grind_size

      render json: {water: water, coffee: coffee, grind_size: grind_size, adjusted_ratio: adjusted_ratio}
    else

      adjusted_ratio = Technique.find(technique_id).default_ratio
      adjusted_grind = Technique.find(technique_id).default_grind_size

      water = (servings.to_i*Constants::WATER_5OZ_TO_GRAMS).round
      coffee = (water/adjusted_ratio).round
      grind_size = adjusted_grind

      render json: {water: water, coffee: coffee, grind_size: grind_size, adjusted_ratio: adjusted_ratio}
    end

  end
end
