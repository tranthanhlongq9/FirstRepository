var moment = require('moment');

// var now = new Date();
// var myBirthday = new Date(1999, 5 , 30); // 30/6/1999

// //number of milliseconds from 1-1-1970 ,múi giờ VN(+7)
// console.log(now);
// console.log(now.getTime());
// console.log(myBirthday.getTime());

var dayNow = moment('2021-03-06 08:00');

// console.log(dayNow); 

console.log(dayNow.fromNow()); //method fromNow() dùng để so sánh ngày hiện tại vs ngày đc set trong moment('...;); 

console.log(dayNow.format('DD/MM/YYYY')); //method Format(); dùng để định dạng ngày tháng năm đc 
