JavaScript offers several built-in objects available in the global scope. These objects are fundamental to the language and provide a range of functionalities.

####  `String`
The `String` object is used for working with text and offers many methods for manipulating strings.

<div class="hint" title="Some String methods">

Use the `String` object methods to manipulate and work with text. Here are some commonly used methods:

- <code>length</code>: Returns the length of the string.
- <code>toUpperCase()</code>: Converts the string to uppercase.
- <code>replaceAll(searchValue, newValue)</code>: Replaces all occurrences of `searchValue` with `newValue`.
- <code>split(separator)</code>: Splits the string into an array of substrings based on the specified separator.

For more information, refer to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">up-to-date JavaScript documentation on the <code>String</code> object.</a>
</div>

```javascript
let str = "Hello, World!";
console.log(str.length); // 13
console.log(str.toUpperCase()); // "HELLO, WORLD!"
```

### Task
Complete the code to performs the following operations:  
- Calculate the length of the string.
- Convert the string to uppercase.
- Replace all occurrences of the letter 'a' with '@'.

<div class="hint" title="Do not reinvent the wheel">
Remember to use the `String` object methods to manipulate and work with text. </div>

<div class="hint" title="Want to know more?">
For more information, refer to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects">up-to-date JavaScript documentation on built-in objects</a>.
</div>