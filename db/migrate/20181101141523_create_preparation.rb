class CreatePreparation < ActiveRecord::Migration[5.2]
  def change
    create_table :preparations do |t|
      t.belongs_to :user
      t.belongs_to :technique
      t.belongs_to :coffee
      t.integer :servings, default: 1
      t.integer :water_amount
      t.integer :coffee_amount
      t.float  :adjusted_ratio
      t.string :strength, default: 'good'
      t.string :adjusted_grind_size
      t.string :flavor, default: 'good'

      t.timestamps
    end
  end
end
