
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

// Come back to this and do my own