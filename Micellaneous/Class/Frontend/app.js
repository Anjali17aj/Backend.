// classes are template for creating objects

//the constructor method is a special method of a class for creating and initializing an object instance of that class


class Person {
        constructor(name, age){
            this.name = name;
        this.age= age;
    }

    talk() {
        console.log(`Hi, my name is ${this.name}`);
    };
}

let p1 = new Person("Emily", 24);
let p2 = new Person("Eva", 25);