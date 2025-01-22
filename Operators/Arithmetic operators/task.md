We've already used the _assignment operator_ (`=`) in our course programs. 
In this lesson, we'll take a closer look at what other operators are available to us in JavaScript, as well as some of their specifics.

Before we begin, let's clarify some terminology so we're on the same page:
- An _operand_ (or _argument_) is what an _operator_ performs an action on. For example, in the expression `2 + 3`, the `+` operator has two operands: `2` and `3`.
- Operators often have two operands and are called _binary_. But there are also _unary_ operators, which take one argument. For example, there is a unary negation operator that changes the sign of a number: `-10`.

We'll start with operators we've known since school: _arithmetic_ operators.
```
+  -- addition
-  -- subtraction
*  -- multiplication
/  -- division
%  -- remainder of integer division
** -- exponentiation
```

The easiest way to get familiar with them is through examples:

```javascript
console.log(11 + 3);  // 14
console.log(11 - 3);  // 8
console.log(11 * 3);  // 33
console.log(11 / 3);  // 3.6666666666666665
console.log(11 % 3);  // 2
console.log(11 ** 3); // 1331
console.log(16 ** 0.5 ); // 4 (raising to the power of 0.5 is the same as taking the square root)
```
You can read more about _arithmetic operators_ [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#arithmetic_operators).

<div class="hint" title="Assignment operators">

  It is quite common in programming to assign a variable the value of an expression that uses the variable's existing value:
  ```javascript
  a = a + 10;
  x = x * 2;
  ```
  In such cases, JavaScript provides assignment operators, allowing you to write the same code more conveniently:
  ```
  a += 10;
  x *= 2;
  ```
  You can read more about assignment operators [here](ttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators).
</div>


### Task
Write a program to calculate the discriminant of a quadratic polynomial:
$${\displaystyle ax^{2}+bx+c}$$
This can be done using the formula:
$${\displaystyle b^{2}-4ac}$$

The coefficients of the polynomial are stored in the variables `a`, `b` and `c`. Write the result to the variable `disc`.
