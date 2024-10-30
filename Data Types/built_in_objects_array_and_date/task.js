// Get the current date and time
let currentDate = new Date();
console.log("Current date and time: " + currentDate);

const date = currentDate;
// Get the year of the given date
let year = date.getFullYear();
console.log("Year of the given date: " + year);

// Convert the given date to a human-readable string
let dateString = date.toDateString();
console.log("Human-readable date string: " + dateString);
