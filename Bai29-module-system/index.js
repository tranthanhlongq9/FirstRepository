var Mouse = require('./mouse1');
var Cat = require('./cat');


var mickey = new Mouse('black');
var jerry = new Mouse('orange');

console.log(mickey);
console.log(jerry);

var tom = new Cat();
tom.eat(jerry);

console.log(tom);