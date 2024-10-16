function analyzeNumber(num) {
    // Convert the number to a string
    let numStr = num.toString();
    console.log("String representation:", numStr);

    // Check if the number is an integer
    let isInteger = Number.isInteger(num);
    console.log("Is integer:", isInteger);

    // Parse a string representation of a number numStr from above and return an integer
    let parsedInt = Number.parseInt(numStr, 10);
    console.log("Parsed integer:", parsedInt);
}

// Example usage
analyzeNumber(42.5);

//The following code exports the car object for the test to access it, please do not modify it
module.exports = analyzeNumber;