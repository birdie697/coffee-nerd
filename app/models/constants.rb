module Constants
  WATER_5OZ_TO_GRAMS = 147.85

  GRIND_SIZE = [
    "Extra Fine-Extra Fine",
    "Extra Fine-Fine",
    "Extra Fine-Medium",
    "Extra Fine-Coarse",
    "Fine-Extra Fine",
    "Fine-Fine",
    "Fine-Medium",
    "Fine-Coarse",
    "Medium-Extra Fine",
    "Medium-Fine",
    "Medium-Medium",
    "Medium-Coarse",
    "Coarse-Extra Fine",
    "Coarse-Fine",
    "Coarse-Medium",
    "Coarse-Coarse",
  ]

  def adjust_grind_for_bitter(last_grind)
    index = GRIND_SIZE.index(last_grind)
    if index == GRIND_SIZE.count
      new_grind = GRIND_SIZE[index]
    else
      new_grind = GRIND_SIZE[index+1]
    end
    return new_grind
  end
  module_function :adjust_grind_for_bitter

  def adjust_grind_for_underdeveloped(last_grind)
    index = GRIND_SIZE.index(last_grind)
    if index == 0
      new_grind = GRIND_SIZE[index]
    else
      new_grind = GRIND_SIZE[index-1]
    end
    return new_grind
  end
  module_function :adjust_grind_for_underdeveloped

  def get_new_grind(flavor, grind_size)
    if flavor == "Bitter"
      adjusted_grind_size = adjust_grind_for_bitter(grind_size)
    elsif flavor == "Underdeveloped"
      adjusted_grind_size = adjust_grind_for_underdeveloped(grind_size)
    else
      adjusted_grind_size = grind_size
    end
    return adjusted_grind_size
  end
  module_function :get_new_grind

  def get_new_ratio(strength, ratio)
    if strength == "Strong"
      adjusted_ratio = ratio + 0.5
    elsif strength == "Weak"
      adjusted_ratio = ratio - 0.5
    else
      adjusted_ratio = ratio
    end
    return adjusted_ratio
  end
  module_function :get_new_ratio

end
