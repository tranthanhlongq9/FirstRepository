/**
 * Sử dụng vòng lặp while tính tổng các số lẻ nhỏ hơn x.
 */

function sum(x) {
    // viết code ở đây.
    var i = 0;
    var sum = 0;
    while (i < x) {
        //biểu thức lặp
        if (i % 2 !== 0) {
            sum += i;
        }
        i++
    }
    return sum;
}

console.log(sum(10)); // show ra tổng các số lẻ nhỏ hơn 10
