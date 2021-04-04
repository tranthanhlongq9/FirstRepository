//console.log(Math.random());

// cho 1 con xúc sắc có 6 mặt, hãy random từ 1-6:
function rollADie(x) {
    return Math.floor((x * 6) + 1);
};
var result = rollADie(Math.random());
console.log('random xúc sắc: ', result);

//

console.log('Làm tròn: ', Math.round(0.4)); // trả về làm tròn đến số nguyên gần nhất

console.log('làm tròn lên: ', Math.ceil(0.4)) // làm tròn số thập phân theo hướng làm tròn lên

console.log('làm tròn xuống: ', Math.floor(0.4)) // làm tròn số thập phân theo hướng làm tròn xuống

console.log('Số Pi: ', Math.PI);

console.log('Số lớn nhất: ', Math.max(10, 20, 5, 15)); // so sánh trả về số lớn nhất

console.log('Số nhỏ nhất: ', Math.min(10, 20, 5, 15)); // so sánh trả về số nhỏ nhất