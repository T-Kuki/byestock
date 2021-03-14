json.array! @items do |items|
    json.extract! items, :id, :maker,:name, :genre, :quantity, :condition, :price, :detail
end






