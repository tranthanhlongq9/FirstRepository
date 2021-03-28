// viết 1 function đếm từ 1 đến 10 dùng setInterval

function countFrom(a, b){
    var i = setInterval(function(){
        
        console.log(a);
        ++a;
        if(a === b+1){
            clearInterval(i);
        }
    },100);
}

countFrom(1,10);
