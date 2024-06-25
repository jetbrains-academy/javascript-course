Converting operands to numbers when comparing can be a feature as well as a problem. 
For example, `0` and `false` it's the same thing for `==` equality:

```javascript
console.log(0 == false)    // true
console.log("" == false)   // true, because "" converted to 0 by == operator
console.log("0" == false)  // true, because "0" converted to 0 by == operator
```

But we don't always need these conversions! 
In these cases, the strict equality operator `===` comes to our help. 
It checks the equality without type conversion. Thus, comparing operands of different types will always give `false`.

There is also a _"strict non-equality"_ operator `!==`.

```javascript
console.log(0 === false)   // false
console.log("" !== false)  // true
```

JS has another way to make comparisons. It is to use the `Object.is()` method. 
It works almost as well as `===`, but the only difference is working with `+0`, `-0` and `NaN`:

```javascript
console.log(-0 === +0)            // true
console.log(Object.is(-0, +0))    // false
console.log(NaN === NaN)          // false
console.log(Object.is(NaN, NaN))  // true
```

You might think it's easy to get confused by comparisons, and you'd be absolutely right! 
Therefore, in any unclear situation you can refer to [this table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#comparing_equality_methods) from the official documentation

### Task
You are given a program with blanks. Fill in the blanks so that the program displays only `true` using only the following set of possible values.
Each value should be used only once.  
Possible values:
- `""`
- `undefined`
- `0`
