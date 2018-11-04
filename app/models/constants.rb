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

end
