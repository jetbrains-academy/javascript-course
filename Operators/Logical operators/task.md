There are several logical operators in the JavaScript language.
Despite their name, they can work not only with the _boolean_ data type, but for simplicity, we'll start with it.

### OR
In JS, this operator is represented with two vertical lines: `||`.  
The idea of the _OR_ operation is that the result will be `true` if **at least one** of the operands is `true`:
```javascript
console.log(false || false);  // false
console.log(false || true);   // true
console.log(true || false);   // true
console.log(true || true);    // true
```

### AND
In JS, this operator is represented with two ampersands: `&&`.  
The idea of the _AND_ operation is that the result will be `true` only if **both** of the operands are `true`:
```javascript
console.log(false && false);  // false
console.log(false && true);   // false
console.log(true && false);   // false
console.log(true && true);    // true
```

### NOT
_NOT_ is a unary operator, and it’s represented with one exclamation sign `!`.  
Its logic is simple: it inverts a value from `false` to `true` and vice versa:
```javascript
console.log(!false);  // true
console.log(!true);   // false
```

### Using operators with variables
Of course, you can use these operators with variables:
```javascript
let a = false;
let b = true;
let c =  a || !b;  // "c" variable will be "false"
```
<div class="hint">
Since the <code>!</code> operator has higher precedence than the <code>||</code> operator, it will be executed first, and no brackets are required.
</div>

If you want, you can read more about 
[AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND), 
[OR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR), 
and [NOT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT) in the up-to-date documentation.

### Task
You are given a piece of a program that should check if an employee's pass allows access to the warehouse.  
Access to the warehouse is granted only if all 3 conditions are met at the same time:
- The pass has warehouse access enabled.
- It’s not a guest pass.
- The pass is not blocked.

Fill in the blanks to get the correct result. 
