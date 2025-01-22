### Parameters and arguments

Functions are already a big step forward, but declaring functions with _parameters_ opens up even more opportunities. To do this, simply specify _parameters_ when declaring the function:
```js
function add(a, b) {
    console.log("a + b =", a + b);
}
```
In the body of the function, we can use parameters as ordinary variables.

However, when calling a function, we need to specify _arguments_ — values that will be passed to the function in place of its parameters:
```js
add(10,20);  // a + b = 30
add(-2,-5);  // a + b = -7
```

### Returning value

A function may _return_ a value as a result of its work, which can then be used elsewhere in the program. Let's improve our `add` function:
```js
function add(a, b) {
    return a + b;
    console.log("This message will never be printed");
}
```
Note that executing the `return` instruction immediately terminates the function.

Let’s see how we can use the value returned by the function:
```js
const result = add(10,20);  // save the returned value to a variable
console.log(result);        // 30
console.log(add(-2,-5));    // immediately use the returned value; prints -7
```

You can read more about returning values [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions).


### Task

Write an `isRightTriangle` function with three parameters specifying the lengths of the sides of a triangle: `side1`, `side2`, and `side3.`

The function must check if a triangle with these side lengths is a right triangle. You can use the [Pythagorean theorem](https://en.wikipedia.org/wiki/Pythagorean_theorem) for this check.

If the triangle is right, the function should return `true`, otherwise `false`.

<div class="hint">
  You need to consider that the side lengths can be passed to the function in any order.
</div>
<div class="hint">
  You don't need to calculate the square roots — just compare the squares of the sides.
</div>