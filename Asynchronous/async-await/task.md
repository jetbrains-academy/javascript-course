Previously, we have discussed how we can specify a handler to be called after the completion of an asynchronous action and even learned how to build a chain of such handlers. 
All these actions are executed automatically independently of the main program, but sometimes we need to explicitly wait for some action to complete.

To begin with, let's declare an `async` function. 
In this case, we explicitly specify that the function will handle asynchronous operations and will always return a `Promise`. 
You may notice that it is much easier to read code this way.

```js
async function hello() {
  return "Hello, World!";
}

// Equivalent to:
function hello() {
  return Promise.resolve("Hello, World!");
}
```

Inside `async` functions we can use the `await` keyword to wait until the promise is resolved. 
This is a _blocking_ action and the execution of the current function will pause while waiting, 
which, at the same time, will not affect the rest of the program in any way.

Let's compare two programs as an example. In the first one we define with `.then` a handler for promise, 
and after that the program execution continues. After promise is resolved, `Hello!` will be printed to the screen. 

```js
async function hello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello!"), 1000);
  });
}

function example1() {
  console.log("Before");
  hello().then(console.log);
  console.log("After");
}

example1();

// This program prints:
/*
Before
After
Hello!
*/
```

<div class="hint">

  If we want to pass the value of a resolved promise further to some function in `.then`, we can simply specify the name of the function. 
  As in the example above, which is equivalent to:
  ```js
  hello().then(function (result) {
    console.log(result);
    });
  ```
</div>

In the second case (with the same `hello` function), the result is different.
```js
async function example2() {
  console.log("Before");
  let result = await hello();
  console.log(result);
  console.log("After");
  return result;
}

example2().then(console.log);

// This program prints:
/*
Before
Hello!
After
Hello!
*/
```

The call using the `await` keyword allows us to explicitly wait for the result and only then continue execution.
We can also use the promise returned by `example2` function to use its value further.

You can read more about [async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) and [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) if interested. 

### Task
The `collector` function is an asynchronous function that takes two promises (`number1` and `number2`) as inputs.
It should wait until they are resolved, add them to the array in the order `[number1, number2]` and return this array as the result of the function.

However, the current implementation doesn't work at all. Fix the function using `await` in your solution.
