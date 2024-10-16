function coerceTypes(a, b) {
    const coercedSum = Number(a) + Number(b);
    //The following code returns the variable coercedSum,
    //when the function is called for displaying the result and testing, please do not modify it
    return coercedSum
}

console.log(coerceTypes('5', 3)); // 8
console.log(coerceTypes('5', '3')); // 8
console.log(coerceTypes(5, 3)); // 8
console.log(coerceTypes(true, false)); // 1 (true is 1, false is 0)

//The following code exports the car object for the test to access it, please do not modify it
module.exports = coerceTypes;