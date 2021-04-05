/**
 * Dùng vòng lặp for để hiển thị ra màn hình bảng chữ cái abc.
 * Gợi ý: Dùng String.fromCharCode
 * Ví dụ: String.fromCharCode(97)) sẽ trả về ký tự"a" 
 * Tham khảo: http://www.asciitable.com/ để hiểu thêm về mã ascii
 */
 

function fromCharCode() {
    var a = ''; // khởi tạo biến rỗng để nhận thag i
    for(var i = 97; i <= 122; i++ ){
       var x = String.fromCharCode(i); // x = i lúc này đã chuyển qua chữ
       a += x; // a tăng lên x 
    }
    return a;
    
}
//fromCharCode();
console.log(fromCharCode());