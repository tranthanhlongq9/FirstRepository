var myCat = {
    name: 'Mun',
    weight: 4,
    age: 6,
    eat: function(mouse, fish ){
        this.weight = this.weight + mouse.weight;
        //return this;
        console.log(this.name, 'đã ăn và số ký hiện tại là: ', this.weight);
    },

    live: function(year){
        this.age = this.age + year.age;
        return this;
    }
};

var fish = {weight: 5}

var mouse = {
    weight: 1
}

var year ={
    age: 5
}

myCat.live(year);
myCat.eat(mouse);

//console.log(myCat);