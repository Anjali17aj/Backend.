//constructors : doesn't return anything and starts with capital letter

function Person(name, age) {
        this.name = name;
        this.age= age;
    }

    Person .prototype.talk = function() {
        console.log(`Hi, my name is ${this.name}`);
    };

let p1 = PersonMaker("Emily", 24);
let p2 = PersonMaker("Eva", 25);