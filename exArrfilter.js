//in ra số dương trong mảng

/**var number = [0, 1, -2, 5, -4, 6, 9, -10];

var result = number.filter(function(item){
    return item <= 0;
});

console.log(result);
 */

// filter các sản phẩm nằm trong 1 category nào đó 
// tính tổng số tiền hàng còn trong kho 
// chọn ra các sản phẩm có tiền hàng tồn lớn (tổng trên 500) filter

var products = [
    {name: 'A', unitPrice: 100, quantity: 10, category: 'Electronic goods'},
    {name: 'B', unitPrice: 200, quantity: 10, category: 'Leather goods'},
    {name: 'C', unitPrice: 300, quantity: 10, category: 'Electronic goods'},
    {name: 'D', unitPrice: 50, quantity: 10, category: 'Sida goods'},
    {name: 'E', unitPrice: 10, quantity: 10, category: 'Electronic goods'},
];

//.filter
var filterCate = products.filter(function(x){
    return x.category === 'Electronic goods';
});
console.log(filterCate);

//.map
var total = products.map(function(y){
    return y.unitPrice * y.quantity;
});

console.log(total);

//
var filterTotal = total.filter(function(t){
    return  t > 500 ;
});

console.log(filterTotal);