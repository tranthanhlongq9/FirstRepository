/*
Khai báo một array "listAnimal" chứa các object mô tả danh sách các con vật.
Mỗi con vật có 2 thuộc tính: name và age trong đó name có kiểu string, age có kiểu number.
 * {name}: string;
 * {age}: number;
*/

var beer = {
    name: 'Gấu',
    age: 5
}; // object
var cat ={
  name: 'mèo',
  age: 3
};
var dog = {
  name: 'chó',
  age: 12
};

var listAnimal = [beer, cat, dog]; // mảng

// muốn thêm 1 con vật nữa vào cái listAnimal:
var fox = {
    name: 'cáo',
    age: 6
};

listAnimal[3] = fox;

console.log(listAnimal);

// thay thế 1 con vật có trong listAnimal bằng 1 con khác:

var lion = {
    name: 'Sư tử',
    age: 10
};

listAnimal[1] = lion;

//var myJSON = JSON.stringify(listAnimal); //Use the function JSON.stringify() to convert(chuyển đổi) it into a string.
//var str = 'Đã thêm: ';

// in ra:
//console.log(str + myJSON);

console.log(listAnimal);