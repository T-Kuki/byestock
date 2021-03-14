class RemoveNameFromWholesalers < ActiveRecord::Migration[6.1]
  def change
    remove_column :wholesalers, :name, :string
  end
end
