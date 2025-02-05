# Understanding Type Coercion in JavaScript

Type coercion is the process of converting a value from one type to another (such as from a string to a number) in JavaScript. This can occur implicitly (automatically by JavaScript) or explicitly (manually by the developer).

### Implicit Type Coercion
JavaScript often converts types automatically when performing operations. This is known as implicit type coercion.

```javascript
console.log("5" - 3); // 2 (string "5" is converted to number 5)
console.log("5" + 3); // "53" (number 3 is converted to string "3")
````

### Explicit Type Coercion
You can also manually convert types using functions like `Number()`, `String()`, and `Boolean()`.

```javascript
console.log(Number("5")); // 5
console.log(String(5)); // "5"
console.log(Boolean(0)); // false
````

### Task
This code is intended to calculate and print the sum of numbers represented as strings in variables `a` and `b` but it's broken.

Without changing the types of variables `a` and `b`, calculate the sum of numbers and save the result to the variable `sum`. The result must be a number, not a string.

<div class="hint" title="A function to help you"> Remember to use the `Number()` function to convert values to numbers. </div>

