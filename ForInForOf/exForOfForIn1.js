/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */
 
 function multiply(arr) {
    // Write code here...
    var total = 1;
    for(var i of arr){
        var x = i;
        total *= x
    }
    return total;
  }

  console.log(multiply([2,3,4]));