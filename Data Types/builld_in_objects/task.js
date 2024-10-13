function analyzeString(str) {
    // Get the length of the string
    let length = str.length;
    console.log("Length:", length);

    // Convert the string to uppercase
    let upperCaseStr = str.toUpperCase();
    console.log("Uppercase:", upperCaseStr);

    // Replace all occurrences of 'a' with '@'
    let replacedStr = str.replace(/a/g, '@');
    console.log("Replaced 'a' with '@':", replacedStr);

    // Split the string into an array of words
    let wordsArray = str.split(' ');
    console.log("Array of words:", wordsArray);
}

// Example usage
// analyzeString("JavaScript is an amazing language");

//The following code exports the car object for the test to access it, please do not modify it
module.exports = analyzeString;