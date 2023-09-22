//index.js (index.js is a special file name *the file should not change*) will require all the things from the apple.js file, banana.js file, orange.js file
//index.js file is main for require
const apple = require("./apple");
const banana = require("./banana");
const orange = require("./orange");

let fruits = [apple, banana, orange];
module.exports = fruits;