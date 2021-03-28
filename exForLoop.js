// in từ 0 -> 9
for(var i = 0; i < 10 ; i++){
    console.log(i);
}
console.log('=============');

//in từ 9 -> 0
for(var j = 9; j >= 0; j--){
    console.log(j);
}
console.log('=============');

// in ra tên của tất cả nhân viên trong mảng
var employees = [
    {name: 'Trần Long', age: 21, gender: 'male'},
    {name: 'Nguyễn A', age: 20, gender: 'male'},
    {name: 'Trần B', age: 25, gender: 'male'},
    {name: 'Lê V', age: 22, gender: 'female'},
    {name: 'Đinh T', age: 19, gender: 'male'},
]

for(var a = 0; a< employees.length; a++){
    console.log(employees[a].name,employees[a].age);
}