// tính giai thừa của 1 số nguyên

function factorials(number) {
    var result = 1;
    for(var i = 1; i <= number; i++){
        //console.log(i);
        result *= i;
    }
    return result;
}

console.log(factorials(4));