var coffeeMachine = {
    makeCoffee: function(onFinish){
        console.log('making coffee....');
        onFinish();
    }
}

var finish = function(){
    console.log("tít tít");
}
//coffeeMachine.makeCoffee();

// có 2 cách dùng function như tham số ( callback ):
//Cách 1: 
    coffeeMachine.makeCoffee(finish);
//Cách 2:
    coffeeMachine.makeCoffee(function(){
        console.log("aaaa");
    })

console.log(coffeeMachine);