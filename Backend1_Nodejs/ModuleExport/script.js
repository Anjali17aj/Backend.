//Topic 4 : data transfer from 1 file to another
//require() : a built-in function to include external modules that exist in separate files
const someValue = require("./math");//script.js wants to use values from math.js then we'll use require keyword. (./ -> accessing files of same directory )

console.log(someValue);

//now goto windows commandline and run
//>node script.js