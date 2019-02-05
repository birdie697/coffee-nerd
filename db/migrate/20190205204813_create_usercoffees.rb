class CreateUsercoffees < ActiveRecord::Migration[5.2]
  def change
    create_table :usercoffees do |t|
      t.belongs_to :user, null: false
      t.belongs_to :coffee, null: false

      t.timestamp null: false
    end
  end
end
