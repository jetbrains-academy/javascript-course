# Understanding Type Coercion in JavaScript

Type coercion is the process of converting a value from one type to another (such as a string to a number) in JavaScript. This can happen implicitly (automatically by JavaScript) or explicitly (manually by the developer).

### Implicit Type Coercion
JavaScript often converts types automatically when performing operations. This is known as implicit type coercion.

```javascript
console.log('5' - 3); // 2 (string '5' is converted to number 5)
console.log('5' + 3); // '53' (number 3 is converted to string '3')
````

### Explicit Type Coercion
You can also manually convert types using functions like `Number()`, `String()`, and `Boolean()`.

```javascript
console.log(Number('5')); // 5
console.log(String(5)); // '5'
console.log(Boolean(0)); // false
````

### Task
Create a function named `coerceTypes` that takes two arguments and returns their sum. If the arguments are not numbers, the function should convert them to numbers before adding.  

Print the result of calling `coerceTypes` with different types of arguments to the console.  

<div class="hint" title="A function to help you"> Remember to use the `Number()` function to convert values to numbers. </div>

