class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :maker
      t.string :name
      t.integer :quantity
      t.string :condition
      t.string :price
      t.string :detail
      t.references :wholesaler, foreign_key: true

      t.timestamps
    end
  end
end
