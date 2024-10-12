function analyzeDate(date) {
    // Get the current date and time
    let currentDate = new Date();
    console.log("Current date and time:", currentDate);

    // Get the year of the given date
    let year = date.getFullYear();
    console.log("Year of the given date:", year);

    // Convert the given date to a human-readable string
    let dateString = date.toDateString();
    console.log("Human-readable date string:", dateString);
}

// Example usage
let exampleDate = new Date('2023-10-09');
analyzeDate(exampleDate);

//The following code exports the car object for the test to access it, please do not modify it
module.exports = analyzeDate;