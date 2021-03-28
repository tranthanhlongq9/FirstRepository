/**
*  Sử dụng vòng lặp for viết hàm has để kiểm tra xem array có tồn tại 1 giá trị xác định hay không
*  Tham số:
*- array: mảng cần kiểm tra
*- value: giá trị cần kiểm tra xem có tồn tại trong array không
* Return:
*- true nếu có tồn tại
*- false nếu không tồn tại

---------------------------------
    .ví dụ khi nhập mảng array = [5,2,4,8,4] và value = 4 .... thì sẽ ktra trong mảng có số 4 hay không?
 -> có thì trả về true và ko có trả về false
*/
function has(array, value) {
    // viết code ở đây
    var found = false;         
    for(var i = 0; i < array.length; i++){
        //console.log(array[i]);
        if(array[i] == value){
            found = true;
            break;
        }
    }
    return found;
}
console.log(has([5,2,4,8,4], 4));


  
    