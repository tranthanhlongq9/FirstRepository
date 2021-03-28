let a = '  Tran Tran Long  '; //index: 0 1 2 3 4 5 6 7 8 9 .... 17  . length: 18


//indexOf: hàm này sẽ trả về vị trí index của phần tử đó trong mảng
let indexOf = a.indexOf('T');
console.log(indexOf);
//lastIndexOf : hàm này cũng sẽ trả về vị trí index của phần tử đó trong mảng nhưng xét từ cuối lên
let lastIndexOf = a.lastIndexOf('T');
console.log(lastIndexOf);

//trim : dùng để cắt bỏ khoảng trắng ở 2 đầu
let trim = a.trim()
console.log(trim);

//substring: lấy ra chuỗi con từ .... đến ....
let stringobj = '123456789'
let subString = stringobj.substring(2, 8)
console.log('substring : ',subString);

//replace : là phương thức dùng để thay thế kí tự này thành kí tự khác
let replace1 = a.replace('Tran','Thành'); // cách này chỉ thay thế đc kí tự nó tìm thấy đầu tiên
console.log(replace1);

let replace2 = a.replace(/Tran/g,'Thành'); // cách này có thể thay thế tất cả kí tự trùng
console.log(replace2);