class AddColumsToWholesaler < ActiveRecord::Migration[6.1]
  def change
    add_column :wholesalers, :company_name, :string
    add_column :wholesalers, :president_name, :string
    add_column :wholesalers, :industry, :string
    add_column :wholesalers, :post_code, :string
    add_column :wholesalers, :city, :string
    add_column :wholesalers, :address, :string
    add_column :wholesalers, :phone_number, :string
  end
end
