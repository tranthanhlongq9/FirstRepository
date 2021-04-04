// Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào

function powerup(arr) {
    // your code here!
    return arr.map(function(x){
        if(x%2 == 0){
            return Math.pow(x,2);
        }
        return x;
        
    });
  }
  console.log(powerup([0,3,6,8,1,2]));
  