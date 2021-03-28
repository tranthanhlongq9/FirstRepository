// for ... of: cũng giống vòng for loop nhưng chỉ lặp tất cả 
// và không biết đc vị trí của vòng đã lặp

var employees = [
    {name: 'Trần Long', age: 21, gender: 'male'},
    {name: 'Nguyễn A', age: 20, gender: 'male'},
    {name: 'Trần B', age: 25, gender: 'male'},
    {name: 'Lê V', age: 22, gender: 'female'},
    {name: 'Đinh T', age: 19, gender: 'male'},
]

for(var employee of employees){
    console.log(employee);
    //console.log(employee.gender);
}

console.log('===============');

// for .. in: chỉ lặp những key có trong obj
// muốn trả value thì cần tênOBJ[tên 1 biến] 
var myDog = {
    name: 'Đần',
    age: 5,
    weight: 10 
}

for(var key in myDog){
    console.log(key, myDog[key]);
}