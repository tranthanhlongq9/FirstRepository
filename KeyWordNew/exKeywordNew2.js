var Tom = {
    name: 'Tom',
    stomach: [],
    eat: function(Mouse){
      this.stomach.push(Mouse);
      return this;
    }
  };
  
   function Mouse(name){
     this.name = name;
   }
  
   var m1 = new Mouse('m1');
   var m2 = new Mouse('m2');
   var m3 = new Mouse('m3');
   
   Tom.eat(m1).eat(m2).eat(m3);
  
   console.log(Tom);