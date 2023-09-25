//inheritance : is a mechanism that allows us to create new classes on the basis of already existing classes.

class Person {
    constructor(name, age){
        console.log("person class constructor");
        this.name = name;
        this.age = age;
}

talk() {
    console.log(`Hi, I am ${this.name}`);
}
}

class Student extends Person {
        constructor(name, age, marks){ //student class constructor
            console.log("student class constructor");
            super(name, age); //parent class constructor is being called
            this.marks = marks;
    }
}
//since person class is being inherited so talk function is also copied.

let p1 = new Person("Emily", 24);
let p2 = new Person("Eva", 25);


// class Student {
//     constructor(name, age, marks){
//         super(name, age);
//         this.name = name;
//         this.age = age;
//         this.marks = marks;
// }

// talk() {
//     console.log(`hi, I am ${this.name}`);
// }
// }


class Teacher extends Person {
    constructor(name, age, subject){ 
       
        super(name, age); //Person - parent class constructor is being called
        this.name = name;
        this.age = age;
        this.subject = subject;
}

talk() {
    console.log(`hi, I am ${this.name}`);
}
}

let stu1  = new student("adams",23 ,78);

