Objects allow storing key-based values, but often we need data storage of a slightly different kind. 
For example, in the form of an ordered sequence. Such storage is called an array. The easiest way to create an empty array is:
```javascript
let colors = [];
```

If we want to declare an array containing some data, we simply provide it in square brackets. 
We can also display the entire array on the screen using the `console.log()` function:

```javascript
let colors = ["red", "blue", "green", "yellow"];
console.log(colors);  // prints [ 'red', 'blue', 'green', 'yellow' ]
```

The main feature of arrays is that they are indexed storage. That is, each element has its own number (_index_). The indexes are sequential and start from **zero**. Using them, you can interact with array elements.
```javascript
console.log(colors[0]);  // prints "red"
console.log(colors[3]);  // prints "yellow"
colors[1] = "purple";    // replaces "blue" with "purple"
console.log(colors[1]);  // prints "purple"
colors[4] = "pink";      // adds new element to the array
console.log(colors);     // [ 'red', 'purple', 'green', 'yellow', 'pink' ]
```

You might think that adding an element to the end of an array using an index is inconvenient. And you would be right. In the following tasks, we will learn how to do it more easily.

### Task
Add two more colors **to the end of the array**: `"brown"` and `"black"`.
