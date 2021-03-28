/**
* Dùng vòng lặp for kiểm tra số nguyên tố. 
* @param {number} x Số cần kiểm tra
* @return {boolean} Trả về true nếu là số nguyên tố, ngược lại là false.
*/



function isPrimeNumber(x) {
    var soUoc = 1;
   
      for (var i = 2; i <= x; i++) {
          if (x % i == 0) {
              soUoc = soUoc + 1;
          }
      }
   
      if (soUoc == 2) {
          return true; // trả về kết quả true;
      } else {
          return false; // trả về kết quả false;
      }
  }
  
  console.log(isPrimeNumber(40));   // số nguyên tố là số chỉ chia hết cho 1 và chính nó.
                                    //số chia cho hết cho số khác nữa thì gọi là hợp số
                                    