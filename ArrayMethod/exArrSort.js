let products=[
    {name:'A', price: 100 , stock: 2},
    {name:'B', price: 200 , stock: 1},
    {name:'C', price: 30 , stock: 3},
    {name:'D', price: 50 , stock: 5},
]

// sắp xếp sản phẩm có giá tiền từ lớn đến nhỏ
let sortedAscendingProducts = products.sort(function(a, b){
    return b.price - a.price;
});

console.log(sortedAscendingProducts);

// sắp xếp sản phẩm có giá tiền từ nhỏ đến lớn
let sortedDescendingProducts = products.sort(function(a, b){
    return a.price - b.price;
});

console.log(sortedDescendingProducts);

// sắp xếp theo tổng tiển trong kho còn bao nhiêu(stock * price).. 
//Sắp xếp từ lớn đến bé
var sortStock = products.sort(function(a,b){
    return  (b.stock * b.price)- (a.stock * a.price);
    
    });
    console.log(sortStock);