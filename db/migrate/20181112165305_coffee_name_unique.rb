class CoffeeNameUnique < ActiveRecord::Migration[5.2]
  def up
    change_column :coffees, :name, :string, uniqueness: true
  end
  def down
    change_column :coffees, :name, :string
  end
end
