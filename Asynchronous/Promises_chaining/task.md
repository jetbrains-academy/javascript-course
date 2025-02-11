Often some asynchronous actions can be linked to other asynchronous actions. 
For example, first we need to load data, then process it somehow, and only then display it to the user. 
Thus, we get a chain of handlers. Fortunately, every `.then` call returns a new promise, so that we can call the next `.then` on it.

```js
new Promise(function (resolve, reject) {
  setTimeout(() => resolve("1"), 1000);
})
  .then(function (result) {
    console.log(result); // 1
    return result + "2";
  })
  .then(function (result) {
    console.log(result); // 12
    return result + "3";
  })
  .then(function (result) {
    console.log(result); // 123
  });
```

In the example above, we first create promise, next specify a handler to print the `result` to the screen and return `result + "2"` as a return value. 
Since `.then` returns a new promise, we can specify the next handler for it and so on.
Such a chain is needed to launch the handler only when the result is ready.

At first, it may seem difficult to understand this sequence. 
We suggest looking at one `.then` statement at once, answering the questions "what situation is being handled now?" 
and "what is the result for the next `.then` statement?".

<div class="hint" title="Returning a custom promise">

  If necessary, we can explicitly define a custom promise that will return a `.then` operator in a chain:
  ```js
  new Promise(function (resolve, reject) {
    resolve("1");
  })
    .then(function (result) {
      console.log(result); // 1
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve("#"), 1000);
      });
    })
    .then(function (result) {
      console.log(result); // #
      return result + "3";
    })
    .then(function (result) {
      console.log(result); // #3
    });
  ```
</div>

Since promise can report not only the result of a successfully completed operation but also an error, we can add error handlers in the `.then` chain as well:
```js
new Promise(function (resolve, reject) {
  setTimeout(() => resolve("1"), 1000);
})
  .then(function (result) {
    console.log(result); // 1
    return result + "2";
  })
  .then(function (result) {
    console.log(result); // 12
    throw new Error("Something goes wrong");
    return result + "3";
  })
  .then(
    function (result) {
      console.log(result); // doesn't execute
    },
    function (error) {
      console.log(error.message); // Something goes wrong
    },
  );
```

You can read more about promises chaining [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining).

### Task
Implement the `summarizeNumbers` function.
The purpose of it is to take a `numbersPromise` promise that resolves to an array of numbers and return a new promise that resolves to the sum of those numbers.

Steps to Implement:
1. Calculate the sum of the numbers.
2. At the end of the handler function, return the sum. This will make the `summarizeNumbers` function return a promise that resolves to the calculated sum.
