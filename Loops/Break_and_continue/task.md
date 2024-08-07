Before we said that the loop condition is responsible for how many times the loop will be executed and when it will terminate. 
Actually, there are two keywords that can change the behavior of the loop a bit: `continue` and `break`.

When a `continue` statement is executed, the current iteration of the loop is immediately interrupted and the loop moves on to the next iteration.

```js
for(let i = 1; i < 10; i++) {
    if (i % 3 === 0) {
        continue
    }
    console.log(i)
}
// Prints 1 2 4 5 7 8
```

`break`, on the other hand, immediately stops the loop execution. The current iteration is also terminated immediately.

```js
for(let i = 1; i < 10; i++) {
    if (i % 3 === 0) {
        break
    }
    console.log(i)
}
// Prints 1 2
```

If loops are nested within each other, `break` and `continue` apply only to the loop in which they were called.

```js
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for (const row of matrix){
    for (const elem of row){
        if (elem % 2 === 0) {
            break
        }
        console.log(elem)
    }
}

// Prints: 1 7
```

Note that the same effect can be obtained without using these operators. 
To do this, you can use conditional statements or/and also change the loop condition. 
Excessive use of `break` and `continue` can make your programs difficult to read, so use them when you really need to.

You can read more about [continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue) 
and [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) by yourself.

### Task
Let's practice working with two-dimensional arrays. A two-dimensional array `matrix` is given. 
Implement a function `maxNegRow` that:
- Finds the first negative element for each row of the `matrix`. 
- Then finds the maximum among all these elements.

It is guaranteed that there is always at least one negative element in a row.

<div class="hint">
  Use <code>break</code> to interrupt the loop of searching for negative elements as soon as you find the first one.
</div>

<div class="hint">
  Use the <code>arrayMax</code> function from the previous task to find the maximum element in the array.
</div>


