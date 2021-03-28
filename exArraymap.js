// bài tập:

var rectangles = [
    {width: 10, height: 5},
    {width: 10, height: 20},
    {width: 4, height: 16}
]

// dùng map method để biến đổi rectangles thành 1 array mới
// gồm có diện tích các hình trên.


var dienTichHCN = rectangles.map(function(x){
    return x.width * x.height;
})


console.log(dienTichHCN);