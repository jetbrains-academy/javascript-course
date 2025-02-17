In JavaScript, _callbacks_ play a vital role in handling tasks that don't complete immediately (these tasks are called _asynchronous_).
They provide a way to continue executing code after an operation is finished, preventing the program from being blocked while waiting for the operation to complete.

In the code, _callback_ is a function passed as an argument to another function, allowing to execute the callback function at a later time.
Before we dive into the specifics of asynchronous program execution, let's start from it.

Let's look at the example below. The `calculateAsync` function takes two numbers and `callback`, a function that will then be called with the result of the addition as an argument.
Internally, a special built-in JavaScript method, `setTimeout`, is used. It allows the instructions you pass to it executed with a delay, in this example, of 2000 ms.

Actually, instead of `setTimeout` there can be, for example, loading data or other "slow" operation. 
But in this course, for simplicity, we will use only `setTimeout` as an asynchronous operation example.

```js
function calculateAsync(a, b, callback) {
  console.log("Starting calculation...");

  setTimeout(() => {
    // this block will be executed asynchronously
    const result = a + b;
    callback(result);
  }, 2000);
}

function logResult(result) {
  console.log(`Asynchronous sum is: ${result}`);
}

calculateAsync(5, 10, logResult);

console.log("After the calculation?");
```

If you run the program, the result may surprise you:
```text
Starting calculation...
After the calculation?
Asynchronous sum is: 15
```

That's because the following happens:
- The `calculateAsync` function is called first. 
It prints the `Starting calculation...` message to the screen and calls the `setTimeout` method. 
This method call is **non-blocking**, i.e., the program will not "freeze" at this point, but will continue execution. 
- So, `calculateAsync` function successfully complete and the `After the calculation?` message is printed. 
- Two seconds later, the instructions passed to the `setTimeout` method are executed, 
which include adding two numbers and calling the `logResult` function, which we passed as a callback.

You can read more about callback functions [here](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function).

### Task
Implement the `arrayProcessor` function that modifies an `array` by applying a given `transform` callback function to each element of it.

A `transform` function is taken an array element as input and returns the transformed value. 
This function could perform any operation. 

<div class="hint" title="Iteration over the array elements">

  You may remember how to iterate through the elements of an array in [this](course://Loops/For) task.
</div>
