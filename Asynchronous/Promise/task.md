Using asynchronous operations, it may initially seem unclear how to retrieve their results,
check if the result is ready, or determine if an error occurred during execution.
To handle these challenges, the JavaScript language uses _promises_.

### Promise
A _promise_ represents the eventual result of an asynchronous operation.
It acts as an object placeholder for a value that is not immediately available but will be resolved at a later time.

To create such an object, we use the `Promise` class. The constructor of the `Promise` class accepts a function.
This function, referred to as the _executor_, can accept two callback arguments, which JavaScript automatically provides.
When the executor obtains the result, it calls one of the following callbacks:
- `resolve(value)` — called when the operation completes successfully, with the result `value`.
- `reject(error)` — called if an error occurs during execution, where `error` is the error object.

Once a `Promise` is created, the _executor_ function is executed, and the following attributes are set on the promise object: `state: "pending"` and `result: undefined`.
When the executor calls `resolve` or `reject`, the `state` of the promise will change to either `fulfilled` or `rejected` accordingly.
The `result` will be updated to either the `value` passed to `resolve` or the `error` passed to `reject`.

### The `.then` method
In many cases, it is necessary to "subscribe" to updates on a promise's state. JavaScript provides such a possibility.
For this purpose, the `.then` method is used, allowing you to specify two handlers: 
the first is executed when the `Promise` resolves successfully, and the second when it is rejected.

```js
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("value"), 2000);
});
promise.then(
  (result) => console.log(result),
  (error) => console.log(error.message), // doesn't execute
);

console.log("First line");

// This program prints:
/*
First line
value
*/
```


In this example, first, the `First line` message is printed. 
After the timer expires, the `resolve` method will be called, the promise state will change,
the first handler provided in `.then` is executed, and the `value` line is printed. 

If the `reject` method is called instead, the second handler will execute.
```js
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("Ooops!")), 1000);
});
promise.then(
  (result) => console.log(result), // doesn't execute
  (error) => console.log(error.message),
);

console.log("First line");

// This program prints:
/*
First line
Ooops!
*/
```

<div class="hint" title="finally">

  Sometimes, actions need to be performed regardless of whether a promise is resolved or rejected. For such scenarios, JavaScript provides the `finally` method.
  ```js
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("value"), 2000);
  });
  promise.then(
    (result) => console.log(result),
    (error) => console.log(error.message),
  );
  promise.finally(() => console.log("Promise ready"));
  
  console.log("First line");

  // This program prints:
  /*
  First line
  value
  Promise ready
  */
  ```
</div>

You can read more about promises [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### Task
Implement a validation step in the `delayedGreeter` function.

This validation should ensure that the `name` argument provided to the function is valid (e.g., defined and not empty).
If the input is invalid (`null`, `undefined`, or an empty string), you should reject the promise by passing an `Error` object with the message `"Name is required"` as the argument to the `reject` method.

You don't need to add any additional timeouts when calling `reject` for this task.

<div class="hint" title="Check for invalid strings">

  You can use [Implicit type conversions](course://Operators/Implicit type conversions) to check if the string is invalid, as explained in the theory materials for this task.
</div>
