class CreateTechniques < ActiveRecord::Migration[5.2]
  def change
    create_table :techniques do |t|
      t.string :name, null: false
      t.float :default_ratio, null: false
      t.string :default_grind_size, null: false

      t.timestamps
    end
  end
end
