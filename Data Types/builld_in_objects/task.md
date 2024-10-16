
### Common Built-in Objects
JavaScript provides several built-in objects that are available in the global scope. These objects are fundamental to the language and provide various functionalities.


####  `String`
The `String` object is used to work with text. It provides many methods to manipulate strings.

<div class="hint" title="Some String methods">

Use the `String object methods to manipulate and work with text. Here are some commonly used methods:

- <code>length</code>: Returns the length of the string.
- <code>toUpperCase()</code>: Converts the string to uppercase.
- <code>replace(searchValue, newValue)</code>: Replaces occurrences of 'searchValue' with 'newValue'.
- <code>split(separator)</code>: Splits the string into an array of substrings based on the specified separator.

For more information, refer to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">official JavaScript documentation on the String object.</a>
</div>


```javascript
let str = "Hello, World!";
console.log(str.length); // 13
console.log(str.toUpperCase()); // "HELLO, WORLD!"
```



### Task
Complete the code of a function named analyzeString that takes a string as an argument and performs the following operations:  
Returns the length of the string.
Converts the string to uppercase.
Replaces all occurrences of the letter 'a' with '@'.
Print the results of each operation to the console.
We will dive deeper into the `function`concept in [one of the following lessons](course://Functions/Introduction%20to%20functions), now just focus on filling the blanks and printing the specified information. Running the code will result in the function being executed. 
<div class="hint" title="Do not reinvent the wheel">
Remember to use the `String` object methods to manipulate and work with text. </div>



<div class="hint" title="Want to know more?">
For more information, refer to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects">official JavaScript documentation on built-in objects</a>.
</div>