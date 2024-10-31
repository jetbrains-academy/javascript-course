const num = 42.5;
// Convert the number to a string
let numStr = num.toString();
console.log("String representation: " + numStr);

// Check if the number is an integer
let isInteger = Number.isInteger(num);
console.log("Is integer: " + isInteger);

// Parse a string representation of a number numStr from above and return an integer
let parsedInt = Number.parseInt(numStr, 10);
console.log("Parsed integer: " + parsedInt);
