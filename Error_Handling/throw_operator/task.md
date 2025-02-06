Previously, we assumed that exceptions are generated automatically. 
Before learning how to generate exceptions manually, let’s clarify some terminology.

In Computer Science, we say that when an error occurs, an exception is generated, which can then be caught and handled. 
However, this description does not clearly explain what an "exception" is in JavaScript.

In JavaScript, an "exception" is an error object. This object can belong to one of the built-in error classes: `Error`, `ReferenceError`, `TypeError`, and others.

Moreover, programmers can generate their own exceptions and use the `try..catch` mechanism to handle them. 
To generate an exception, use the `throw` operator with an error object.
While creating this object, you can specify a custom message as a constructor argument. You can later access it in the `catch` block via the `message` property of the error object.

```js
function intArraySum(array) {
    let sum = 0;
    for (let elem of array) {
        if (Number.isInteger(elem)) {
            sum += elem;
        } else {
            throw new Error("Not an integer encountered");
        }
    }
    return sum;
}

try {
    let sum1 = intArraySum([1, -20, 123]);
    console.log(sum1);  // prints 104

    let sum2 = intArraySum([2, 4, "8"]);  // raises the exception

    // the following instructions in the try block will not be executed 
    console.log(sum2);
    console.log(sum1 + sum2);
} catch (e) {
    console.log(e.message);  // Not an integer encountered
}
```

The line where the exception is generated and the handler for that exception may be located in different functions or even in different files. 
You should pay attention to where the error will be handled and what instructions will not be executed when the exception is generated.

Additionally, note that if an exception is generated inside a function, the function terminates immediately without returning any value, as the return value will not be used.

You can read more about the `throw` operator [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw).

### Task
As the number of users increases, you have decided that the greeting function written earlier needs to be changed.
Instead of greeting users whose names cannot be retrieved, the function should now report an error message in such cases.

Modify the greeting function so that, instead of returning a string greeting a stranger 
it throws an `Error` with the message `"A person must have a name and a surname"`.
