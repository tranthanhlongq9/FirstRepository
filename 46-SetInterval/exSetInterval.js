
// // setInterval sẽ gọi lại function sau 1 khoảng tg
// var i = 0;
// console.log('Bắt đầu đếm: ');
// setInterval(function(){
//     ++i;
//     console.log(i);
// },1000);// cứ mỗi 1s thì function sẽ đc gọi lại


// clearInterval
var i = 0;

console.log('Bắt đầu đếm: ');
var intervalID = setInterval(function(){
    ++i;
    console.log(i);
    if(i == 5){
        clearInterval(intervalID); // hàm này sẽ dừng setInterval lại
    }

},1000);// cứ mỗi 1s thì function sẽ đc gọi lại

