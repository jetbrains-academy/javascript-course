function coerceTypes(a, b) {
    return Number(a) + Number(b);
}

console.log(coerceTypes('5', 3)); // 8
console.log(coerceTypes('5', '3')); // 8
console.log(coerceTypes(5, 3)); // 8
console.log(coerceTypes(true, false)); // 1 (true is 1, false is 0)

//The following code exports the car object for the test to access it, please do not modify it
module.exports = coerceTypes;