let colors = ["red", "blue", "green", "yellow"];
console.log(colors);    // prints [ 'red', 'blue', 'green', 'yellow' ]

console.log(colors[0]);  // prints "red"
console.log(colors[3]);  // prints "yellow"
colors[1] = "purple";    // replace "blue" with "purple"
console.log(colors[1]);  // prints "purple"
colors[4] = "pink";      // add a new element to the array
console.log(colors);     // [ 'red', 'purple', 'green', 'yellow', 'pink' ]

colors[5] = "brown";
colors[6] = "black";

console.log(colors);     // should be [ 'red', 'purple', 'green', 'yellow', 'pink', 'brown', 'black' ]
