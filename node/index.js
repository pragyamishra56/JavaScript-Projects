// const msg = require('./myscript.js');

// console.log(msg);

// console.log(arguments);
// console.log(require); // that has info about the file that required func
// console.log(module); // that has info about the file that is being executed
// console.log(__filename); // that's full path, plus the file name of this file
// console.log(__dirname); // we'll get the directory that this file live in
// ./ means look in the current working directory or in the current directory
// Required Cache is a Object that stores the result of requiring in a file.
// this is an objects that stores the result of requiring in any file to our projects.

// require('./myscript.js');
// console.log(require.cache);

const counterObject = require('./myscript.js');

console.log(counterObject.getCounter());
counterObject.incrementCounter();
console.log(counterObject.getCounter());

const newCounterObject = require('./myscript.js');
console.log(newCounterObject.getCounter());