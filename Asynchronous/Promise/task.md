Using asynchronous operations, it may seem unclear how to get the result of their work, 
how to know if the result is ready or, on an opposite, if an error occurred during execution. 
To deal with these problems, the JavaScript language uses _promises_.

### Promise
A _promise_ represents the eventual result of an asynchronous operation. 
It serves as an object-placeholder for a value that is not immediately available but will be determined at a later point in time.

To create such an object, we use the `Promise` class, whose constructor accepts a function. 
The function passed to `Promise` constructor is called the _executor,_ and it can accept two argument-callbacks that JavaScript itself passes to it. 
When the executor sooner or later obtains the result, it should call one of these callbacks:
- `resolve(value)` — if it finished successfully, with result `value`.
- `reject(error)` — if an error has occurred, `error` is the error object.

Just after `Promise` is created, _executor_ is started, and the `state: "pending"` and `result: undefined` attributes are set on the created object.
Calling the `resolve` or `reject` methods inside the executor will set the `state` to `fulfilled` or `rejected` respectively. 
The `result` attribute will be equal to either `value` passed to the `resolve` method or `error` passed to the `reject` method.

### `.then` method
It would be useful to "subscribe" to the promise state update and JavaScript provides such a possibility. 
For this purpose, the `.then` method is used, which allows you to specify two handler actions when the `Promise` is resolved or rejected.

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


So, in this example, we will first see the `First line` printed. 
After the timer expires, the `resolve` method will be called, the promise state will change, 
the first handler we specified in `.then` will be executed and the `value` line will be printed. 

If reject is called in promise, the second handler will be executed.
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

  Just like with the exception handling mechanism, sometimes we need to perform some actions regardless of whether an error has occurred or not. Such a handler for promise can be set using the `finally` method.
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
If the input is invalid (`null`, `undefined`, or an empty string), you should reject the promise providing `Error` object with message `"Name is required"` as an `reject` method's argument.

You don't need to add any additional timeouts to call `reject` in this task.

<div class="hint" title="Check for invalid string">

  You can use [Implicit type conversions](course://Operators/Implicit type conversions) to check that the string is not invalid as shown in theory materials for that task.
</div>
