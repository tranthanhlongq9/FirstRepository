// dùng reduce để tính tổng đơn hàng.

var orders = [
    {name: 'A', quantity: 2 , unitPrice: 100},
    {name: 'B', quantity: 5 , unitPrice: 15},
    {name: 'C', quantity: 1 , unitPrice: 200},
    {name: 'D', quantity: 3 , unitPrice: 125}
];

var giaTien = orders.map(function(x){
    return x.quantity * x.unitPrice;
    //console.log(x);
})

var total = giaTien.reduce(function(x,y){
    return x + y;
})

console.log(total);