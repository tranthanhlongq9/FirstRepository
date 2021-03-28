// cách 1 con vật ăn sẽ như thế nào :

var animals = {
    action: function(onActive){
        console.log('Đang...');
        onActive();

    }
}

var eat = function(){
    console.log('ăn ... chẹp chẹp');
}

var walk = function(){
    console.log('đi..... bộp bộp');
}

animals.action(walk);

console.log(animals);