// 'new' 1 obj

//.. constructor function ( ko khác gì function bth , 
                            //tất cả các function đều có thể new
                            // viết hoa chữ đầu để phân biệt với function bth)
function Mouse(color, weight){
    this.type = 'mouse';
    this.color = color;
    this.weight = weight;

}

let mouse1 = new Mouse('black',0.5); //new: khi đc tạo ra thì sẽ có tất cả thuộc tính của Mouse 
let mouse2 = new Mouse('Yellow',1);

console.log(mouse1);
console.log(mouse2);
