/**
 * Viết hàm calculate trả về tích các số từ start đến end, không tính end 
 * Ví dụ: calculate(2, 5) trả về kết quả 24 (vì 2 * 3 * 4 = 24)
 */
 function calculate(start, end) {
    // viết code ở đây.
    var multi = 1;
  for(var i = start; i < end ; i++){
    var x = i;
    console.log(x);
    multi *= x; 
   // console.log(x);
    }
    return multi;
}
//    var start = 2;
//    var end = 5;
  
   
console.log(calculate(2,5));