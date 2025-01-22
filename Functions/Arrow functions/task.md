Besides function statements and function expressions, JavaScript has one more way to create functions: using _arrow function expressions_.

The structure of an _arrow function expression_ is very simple:
```js
(param) => expression
```

As you can see, there is no function name here either, but we can assign the value of this function to a variable:
```js
inc = (a) => a + 1;

console.log(inc(15));
```

You can think of an arrow function as an alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage. For example, arrow functions are excellent for providing concise callback functions, especially when working with array methods. We haven't yet covered topics where this might be important, but if you're interested, you can read more about arrow function expressions [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Task
Write an arrow function expression to select the maximum of its arguments. The value of this expression should be the value of the `max` function.

<div class="hint">

  This task can be simply done with the [conditional (ternary) operator](course://Conditional statements/Ternary operator).
</div>
