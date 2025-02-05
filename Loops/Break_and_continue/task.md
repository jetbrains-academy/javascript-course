Previously, we mentioned that the loop condition determines how many times the loop will execute and when it will terminate.
However, there are two keywords that can slightly alter the behavior of the loop: `continue` and `break`.

When a `continue` statement is executed, the current iteration of the loop is immediately interrupted and the loop moves on to the next iteration.

```js
for(let i = 1; i < 10; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}
// Prints 1 2 4 5 7 8
```

`break`, on the other hand, immediately stops the loop, terminating the current iteration as well.

```js
for(let i = 1; i < 10; i++) {
    if (i % 3 === 0) {
        break;
    }
    console.log(i);
}
// Prints 1 2
```

If loops are nested, `break` and `continue` apply only to the loop in which they are called.

```js
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for (const row of matrix){
    for (const elem of row){
        if (elem % 2 === 0) {
            break;
        }
        console.log(elem);
    }
}

// Prints: 1 7
```

Note that the same effect can be achieved without using these operators.
You can do this by using conditional statements or modifying the loop condition. 
Excessive use of `break` and `continue` can make your programs harder to read, so use them only when necessary.

You can read more about [continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue) and [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) on your own.

### Task
Let's practice working with two-dimensional arrays. A two-dimensional array, `matrix`, is given. 
Implement a function `maxNegRow` that:
- Finds the first negative element in each row of the `matrix`. 
- Then finds the maximum among all these elements.

It is guaranteed that there is at least one negative element in each row.

<div class="hint">
  Use <code>break</code> to exit the loop as soon as you find the first negative element.
</div>

<div class="hint">
  Use the <code>arrayMax</code> function from the previous task to find the maximum element in the array.
</div>


