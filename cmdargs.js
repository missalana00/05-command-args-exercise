
"use strict";

// command line args are an array

// Consider: node cheer.js Marshall

// When you write the above out in the command line, the 
// interpreter changes it to this: ["node", "cheer.js", "Marshall"]

const [,,...myArray] = process.argv;

if (myArray.length === 0) {
	console.log("There's nothing there!");	
} else {
	myArray.join(" ").split("").forEach((letter)=>{
		console.log(`${letter}`);
	});
};

// There is an implicit return with the fat arrow function.



// TAKEAWAYS:

// 1. the spread operator

// 2. array deconstruction

// 3. command line arguments

// Come back to this and do my own with Joe!


// Understand the below example



// From: https://en.wikipedia.org/wiki/Command-line_interface#Arguments

// A command-line argument or parameter is an item of information provided 
// to a program when it is started. A program can have many command-line 
// arguments that identify sources or destinations of information, or that alter 
// the operation of the program.

// When a command processor is active a program is typically invoked by typing 
// its name followed by command-line arguments (if any). 




// From: https://nodejs.org/docs/latest/api/process.html#process_process_argv

// process.argv

// The process.argv property returns an array containing the command line arguments 
// passed when the Node.js process was launched. The first element will be process.execPath. 
// See process.argv0 if access to the original value of argv[0] is needed. The second element 
// will be the path to the JavaScript file being executed. The remaining elements will 
// be any additional command line arguments.

// For example, assuming the following script for process-args.js:

// print process.argv

// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });
// Launching the Node.js process as:

// $ node process-2.js one two=three four

// Would generate the output:

// 0: /usr/local/bin/node
// 1: /Users/mjr/work/node/process-2.js
// 2: one
// 3: two=three
// 4: four



