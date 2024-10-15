The `for` loop is commonly used in programming. It may seem complicated at first, but let's break it down step by step.
```js
for(let i = 0; i < 3; i++) {
    console.log(i);
}
// Prints: 0 1 2
```

Although the `for` loop can be used in various ways, its primary purpose is as a _loop with a counter_.
We know exactly how many times it will execute. The `for` loop consists of 3 parts, separated by semicolons (`;`):
```js
for(<initialization> ; <condition> ; <afterthought>)
```

- `<initialization>` – typically used to initialize a counter variable. This block is executed once before the cycle starts.
- `<condition>` – just like in a `while` loop, this is an expression that is checked before each iteration of the loop. If it is `false`, the loop is terminated.
- `<afterthought>` – a statement that is executed after each iteration, before the next condition check. It is usually used to update the counter variable.

The `for` loop can be especially useful when working with arrays:
```js
let colors = ["red", "blue", "green", "yellow"]

for(let i = colors.length - 1; i >= 0; i--) {
    console.log(i, colors[i]);
}

// Prints:
// 3 yellow
// 2 green
// 1 blue
// 0 red
```

You can read more about the `for` loop [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for).

### Task
Write a function that calculates the sum of the elements in an array. It is guaranteed that all elements passed to the function will be numbers.
