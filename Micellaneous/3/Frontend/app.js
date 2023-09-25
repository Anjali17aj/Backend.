//factory functions : a function that creates objects.

function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`hi, My name is ${this.name}`);
        },
    }
    return person;
    
}

let p1 = PersonMaker("Emily", 24);
let p2 = PersonMaker("Eva", 25);