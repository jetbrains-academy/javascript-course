Previously, we have considered situations where exceptions were generated automatically due to JavaScript errors. 
However, the programmer can also generate exceptions and use the `try..catch` mechanism to handle their own errors.

To generate an exception, use the `throw` operator with an error object. 
JavaScript has many built-in classes for standard errors: `Error`, `ReferenceError`, `TypeError` and others. 
We can use them to create error objects and specify a custom message as a constructor argument. 
It is accessible with the `message` property of the error object in the `catch` block.

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

The line where the exception is generated and its handler may be in different functions or even in different files. 
You should pay attention to where the error will be handled and what instructions will not be executed when the exception is generated.

Also note that if an exception is generated inside a function, the function is immediately terminated without returning any value, as it will not be used.

You can read more about `throw` operator [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw).

### Task
As the number of users increases, you have decided that the greeting function written earlier needs to be changed. 
And you decided that it should no longer greet users whose names cannot be retrieved, but it should report an error message in this situation.

Change the greeting function so that instead of returning a string greeting a stranger, 
it throws an `Error` with the message `"Person must have name and surname"`.
