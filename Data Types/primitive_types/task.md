In JavaScript, primitive types are the most basic data types. They are immutable and are compared by value. JavaScript has six primitive types:

1. **Number**: Represents both integer and floating-point numbers.
2. **String**: Represents a sequence of characters.
3. **Boolean**: Represents a logical entity and can have two values: `true` and `false`.
4. **Undefined**: A variable that has been declared but not assigned a value.
5. **Null**: Represents the intentional absence of any object value.
6. **Symbol**: A unique and immutable data type used to create unique identifiers for objects.
7. **BigInt**: Represents integers of arbitrary magnitude. It allows you to safely store and perform operations on large integers, even those exceeding the safe integer limit.

```javascript
// Example: Using different primitive types
let number = 42;
console.log(typeof number); // "number"

let string = "Hello, world!";
console.log(typeof string); // "string"

let boolean = true;
console.log(typeof boolean); // "boolean"

let undefinedVar;
console.log(typeof undefinedVar); // "undefined"

let nullVar = null;
console.log(typeof nullVar); // "object"

let symbol = Symbol("unique");
console.log(typeof symbol); // "symbol"

let integerNumber = Number.MAX_SAFE_INTEGER;
console.log(integerNumber);  // 9007199254740991

console.log(integerNumber * integerNumber);
// 8.112963841460666e+31

let bigIntegerNumber = BigInt(Number.MAX_SAFE_INTEGER);
console.log(bigIntegerNumber * bigIntegerNumber);
// 81129638414606663681390495662081n
```
Remember that `typeof` returns "object" for `null`, which can be misleading.

<div class="hint" title="Advantages of using primitive types">
<ul>
<li>Performance: Primitive types are generally faster and more efficient to work with compared to complex types.</li>
<li>Simplicity: They are simple to use and understand, making them ideal for basic operations and comparisons.</li>
</ul>
</div> 
<div class="hint" title="Specific behaviour">
<ul>
<li>Immutability: Primitive types are immutable, meaning their values cannot be changed once created.</li>
<li>Limited Functionality: They lack the methods and properties that objects have, which limits their functionality.</li>
</ul>
</div>

### Task
Declare a variable `value` and assign it different primitive types of values: `number`, `string`, `boolean`, `undefined`, `null`, and `symbol`.

<div class="hint" title="Want to know more?">
For more information, refer to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values">up-to-date JavaScript documentation on primitive types</a>.

You can read more about <code>BigInt</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type">here</a>. 
</div>
