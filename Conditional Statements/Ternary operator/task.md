In programming, it is often necessary to define the value of a variable based on a condition. For example:
```js
let guestType = "adult";
let tickerPrice;
if (guestType === "adult"){
    tickerPrice = 10;
} else {
    tickerPrice = 5;
}
console.log(tickerPrice);  // 10
```

However, you can see how bulky such a simple operation looks.
Therefore, in these cases, it is easier to use the _conditional (ternary) operator_. Recall that in JavaScript, we have unary and binary operators, which have one and two operands, respectively. As you might guess, this operator has _3 operands_.

```js
let guestType = "adult";
let tickerPrice = guestType === "adult" ? 10 : 5;
console.log(tickerPrice);  // 10
```

The idea is as follows: 
- The first operand is a _condition_ (`guestType === "adult"`). 
- If the _condition_ is `true`, the operand following the `?` sign will be evaluated (`10`).
- If the condition is `false`, the operand following the `:` sign will be evaluated (`5`).

In other words, depending on the condition, the value of the entire `guestType === "adult" ? 10 : 5` expression will be either `10` or `5`.

You can read more about the _conditional ternary operator_ [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

### Task
Using the ternary operator, calculate the [absolute value](https://en.wikipedia.org/wiki/Absolute_value#Real_numbers) of the `n` variable in one line.
