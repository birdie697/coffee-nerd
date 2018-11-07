class ChangePerparationsServings < ActiveRecord::Migration[5.2]
  def change
    change_column :preparations, :servings, :decimal
  end
end
