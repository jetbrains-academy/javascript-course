
#### `Number`
The `Number` object is used to represent and manipulate numbers.

<div class="hint" title="Some Number methods">

Use the <code>Number</code> object methods to manipulate and work with numbers. Here are some commonly used methods:

- <code>toString()</code>: Converts the number to a string.
- <code>isInteger(value)</code>: Determines whether the value is an integer.
- <code>parseInt(string, radix)</code>: Parses a string and returns an integer of the specified radix (base).

For more information, refer to the <a href ="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">official JavaScript documentation on the Number object.</a>
</div>


```javascript
let num = 42;
console.log(num.toString()); // "42"
console.log(Number.isInteger(num)); // true
```

### Task
Create a function named `analyzeNumber` that takes a number as an argument and performs the following operations:  
 - Converts the number to a string.
 - Checks if the number is an integer.
 - Parses a string representation of a number and returns an integer.

Print the results of each operation to the console.  
 <div class="hint" title="Don't reinvent the wheel"> Remember to use the <code>Number</code> object methods to manipulate and work with numbers. </div>
