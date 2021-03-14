json.wholesaler do
    json.extract! @wholesaler, :id,:company_name, :president_name, :industry, :post_code, :city, :address, :phone_number
end
json.item do
    json.array! @items do |items|
        json.extract! items, :id, :maker,:name, :genre, :quantity, :condition, :price, :detail
    end
end