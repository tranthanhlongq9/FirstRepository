// các method của 1 array:
var a = [1,2,3,4,5];
var b = [6,7,8];
 var i = 9;

// - a.concat(b) : nối 2 mảng lại vs nhau với a và b không thay đổi
    var c = a.concat(b);
    console.log(c);

// - a.push(b): thêm 1 phần tử mới vào array ở vị trí cuối cùng.
                // method push sẽ trả về length , thay đổi thằng gọi push   
    //a.push(i);  
  // console.log(a);

// - a.pop(): đẩy phần tử cuối cùng của mảng ra khỏi mảng
            // trả về phần tử bị đẩy ra, và thay đổi thag gọi method pop.
    // b.pop();
    // console.log(b);

// - a.shift() : đẩy phần tử đầu tiên của mảng ra khỏi mảng.
            // trả về phần tử bị đẩy ra, và thay đổi thag gọi method pop.
    // a.shift();
    // console.log(a);
    // var c = a.shift(); // thag c này sẽ lưu giá trị bị đẩy ra
    // console.log(c);

// - a.unshift(); : nhét 1 phần tử vào đầu mảng.
                //method unshift trả về length của mảng và thay đổi thag gọi method
    // var a = [1,2,3,4,5];
    // var b = [6,7,8];

    // var c = a.unshift(5);
    // console.log(a);