class PreparationsNullFalse < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:preparations, :water_amount, false)
    change_column_null(:preparations, :coffee_amount, false)
    change_column_null(:preparations, :adjusted_ratio, false)
    change_column_null(:preparations, :adjusted_grind_size, false)
  end
end
