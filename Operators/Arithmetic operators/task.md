We've already used the _assignment operator_ (`=`) in our course programs. 
In this lesson, we'll take a closer look at what other operators are available to us in JavaScript, as well as some of their specifics.

And before we begin, a couple words about terminology, so we're speaking the same language:
- An _operand_ (or _argument_) is what an _operator_ performs an action on. For example, in the expression `2 + 3`  the `+` operator has two operands: `2` and `3`
- Operators often have two operands and are called _binary_. But there are also _unary_ operators (which take one argument). For example, there can be a unary negation that changes the sign of a number: `-10`

We'll start with operators we've known since school: _arithmetic_ operators
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
console.log(11 + 3)  // 14
console.log(11 - 3)  // 8
console.log(11 * 3)  // 33
console.log(11 / 3)  // 3.6666666666666665
console.log(11 % 3)  // 2
console.log(11 ** 3) // 1331
console.log(16 ** 0.5 ); // 4 (power of 0.5 is the same as a square root)
```
You can read more about _arithmetic operators_ [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#arithmetic_operators).

### Task
Write a program to calculate the discriminant of the quadratic polynomial:
$${\displaystyle ax^{2}+bx+c}$$
This can be done using the formula:
$${\displaystyle b^{2}-4ac}$$

The coefficients of the polynomial are stored in variables `a`, `b` and `c`. Write the result to the variable `disc`.
