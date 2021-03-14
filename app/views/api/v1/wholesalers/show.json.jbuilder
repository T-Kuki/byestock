json.array! @items do |items|
    json.extract! items, :maker,:name, :genre, :quantity, :condition, :price, :detail
end






