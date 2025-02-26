In JavaScript, _callbacks_ play a vital role in handling tasks that don't complete immediately (these tasks are called _asynchronous_).
They provide a way to continue executing code after an operation is finished, preventing the program from being blocked while waiting for the operation to complete.

A _callback_ is a function passed as an argument to another function, allowing the callback function to be executed at a later time.
Before diving into the specifics of asynchronous program execution, let's start with the basics.

Let's look at the example below. The `calculateAsync` function takes two numbers and a `callback` — a function that will later be called with the result of the addition as an argument.
Internally, a special built-in JavaScript method, `setTimeout`, is used. This method allows the instructions you pass to it to be executed after a delay — in this case, 2000 ms.

Actually, instead of using `setTimeout`, there could be tasks like data loading or other "slow" operations.
However, in this course, for simplicity, we will use `setTimeout` as an example of an asynchronous operation.

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

If you run this program, the result may surprise you:
```text
Starting calculation...
After the calculation?
Asynchronous sum is: 15
```

Here’s what happens:
- The `calculateAsync` function is called first. 
It prints the `Starting calculation...` message to the screen and calls the `setTimeout` method.
  This method call is **non-blocking**, meaning the program will not "freeze" at this point, but will continue to execute subsequent code. 
- As the program continues, the `calculateAsync` function successfully completes, and the `After the calculation?` message is printed. 
- Two seconds later, the instructions passed to the `setTimeout` method are executed.
  This includes adding the two numbers and calling the `logResult` function, which we passed as a callback.

You can read more about callback functions [here](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function).

### Task
Implement the `arrayProcessor` function, which modifies an `array` by applying a given `transform` callback function to each element.

The `transform` function takes an array element as input and returns a transformed value.
This function can perform any operation. 

<div class="hint" title="Iteration over the array elements">

  You may remember how to iterate through array elements in [this](course://Loops/For) task.
</div>
