/**
 * Sử dụng vòng lặp for để tính tổng các số có trong mảng:
 */

 function sum(array){
  var sum = 0;
  for(var i = 0; i < array.length; i ++){
      sum += array[i];

      //var x = array[i]; // cách này xưa rồi !!
     // sum += x;
  }
  return sum;
}
//var array = [1,2,3,5];


console.log(sum(array = [1,2,3,5]));