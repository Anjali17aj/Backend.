//Topic 4 : data transfer from 1 file to another

const sum = (a,b) => a+b;
const mul = (a,b) => a*b;
const g = 9.8;
const PI =3.14;

//2  
// module.exports.sum = (a,b) => a+b;
// module.exports.mul = (a,b) => a*b;
// module.exports.g = 9.8;
// module.exports.PI =3.14;

//3
// module.exports = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     PI: PI
// };

let obj = {
    sum: sum,
    mul: mul,
    g: g,
    PI: PI
};

//module.exports is an object
module.exports =  obj;  //math.js file is giving information through module.export to script.js
