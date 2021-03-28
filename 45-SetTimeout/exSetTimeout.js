
// // setTimeout:
// console.log('One');
// setTimeout(function(){
//     console.log('Two');
// },1000); // 1000 là sau 1s thì function mới chạy
// console.log('Three');


// clearTimeout:
console.log('One');
var timeoutId = setTimeout(function(){
    console.log('Two');
},1000); // 1000 là sau 1s thì function mới chạy
console.log('Three');

clearTimeout(timeoutId); // khi gọi hàm này và truyền vào Id thì hàm id có gán setTimeout sẽ bị dừng.
