function toStringExplanation(number, radix) {
    try {
        return number.toString(radix);
    } catch (e) {
        if (e instanceof RangeError) {
            return 'Radix is less than 2 or greater than 36';
        }
        if (e instanceof TypeError) {
            return 'Method is invoked on an object that is not a Number';
        }
    }
}

console.log(toStringExplanation(10, 2));    // 1010
console.log(toStringExplanation(10, -2));   // Radix is less than 2 or greater than 36
console.log(toStringExplanation(null, 2));  // Method is invoked on an object that is not a Number
