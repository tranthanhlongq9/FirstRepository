
let a = [5,6,22,8,7,9,3];

function snt(a){
    let total;
    for(let i = 0; i < a.length; i++){      
        let dem =0 ;
        for(let j = 1; j < 10; j++){
            if(a[i] % j == 0 && a[i] > 0){
                dem++;
            }      
                 
        }
        if(dem == 2){
            total = a[i];
            console.log(total, 'la so nguyen to');
        // console.log('true');
        }  
        // else{
        //     console.log('ko có số nguyên tố');
        // }
    
    }
    return total;   
}

//let a=[10,3,5,1,8,337,2]
console.log(snt(a=[5,6,9,22,8,7,3]));


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

//let a = [5,6,9,22,8,7,3];
//tìm số nhỏ thứ 2 trong mảng
console.log('--Số nhỏ thứ 2 trong mảng: ');
let min1 = a[0];
let min2 = a[1];

for(let i = 0; i < a.length; i++)
{
    if(a[i] <= min1){
        min1 = a[i];
    }
    else if(min1 < min2 && a[i] < min2){
        min2 = a[i];
    }
}

console.log(min1 , min2);

//let a = [5,6,9,22,8,7,3];
//tìm số lớn thứ 2 trong mảng
console.log('--Số lớn thứ 2 trong mảng: ');
let max1 = a[0];
let max2 = a[1];
for(let i = 0; i < a.length; i++)
{
    if(a[i] >= max1){
        max1 = a[i];
    }
    else if(max1 > max2 && a[i] > max2){
        max2 = a[i];
    }
}

console.log(max1 , max2);



