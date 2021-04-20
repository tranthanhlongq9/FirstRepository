
let a = [5,6,9,22,8,7,3];

//tìm trong mảng số lớn nhất:
let maxArr = a[0];
for(let i = 0; i < a.length; i++){
    if(a[i] > maxArr){
        maxArr = a[i];
    }
}
console.log('số lớn nhất trong mảng: ' ,maxArr);

// tìm số nhỏ nhất trong mảng
let minArr = a[0];
for(let i = 0; i < a.length; i++){
    if(a[i] < minArr ){
        minArr = a[i];
    }
}
console.log('số nhỏ nhất trong mảng: ' , minArr);

//tìm số chẵn trong mảng
console.log('--Số chẵn có trong mảng: ');
for(let i = 0; i < a.length; i++){
    if(a[i] % 2 == 0){
        console.log(a[i]);
    }
}

//tìm số lẻ trong mảng
console.log('--Số lẻ trong mảng: ');
for(let i = 0; i < a.length; i++){
    if(a[i] % 2 != 0){
        console.log(a[i]);
    }
}