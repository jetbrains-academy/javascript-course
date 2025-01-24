Since errors can be of different types, we may need to respond to them in different ways. 
To implement it, we can use the already known `instanceof` operator to check if the object belongs to some class. 
For clarity, we're printing the error object's attribute `name` containing the error type.

Besides, in this example you may encounter `finally` block. 
It will always be executed not matter the exception in the `try` block has occurred or not. 
This block is optional and can be omitted, as we did in the previous tasks. 
Often it can be used to close a file the program was working with since it is guaranteed to be executed in any case.

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

let examples = [
    [1, -20, 123],
    null,
    [2, 4, "8"]
];

for (let example of examples) {
    try {
        console.log(intArraySum(example));
    } catch (e) {
        console.log("Caught: " + e.name);
        if (e instanceof TypeError) {
            console.log("TypeError occurred");
        } else {
            console.log("Other error occurred");
        }
    } finally {
        console.log("Finally block executed\n");
    }
}

/* The output:
104
Finally block executed

Caught: TypeError
TypeError occurred
Finally block executed

Caught: Error
Other error occurred
Finally block executed
*/
```

In the example above, we are calling the previously known `intArraySum` function with different arguments:
1. The first time with a valid array.
2. The second time we passed `null` as an argument and JavaScript automatically generates the `TypeError` exception. We have a separate condition for it in the `catch` block: printing the `"TypeError occurred"` message.
3. And the third time the array contained a non-number and the `intArraySum` function generated an exception of `Error` type.

The instruction in the `finally` block was executed each time.

You may read more about using `instanceof` when processing errors [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#conditional_catch_blocks).

### Task
Imagine you want to write an example to demonstrate how the [Number.toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) function works. 
From the documentation, you have learned that it can generate two types of errors:
* `RangeError`: thrown if `radix` is less than 2 or greater than 36.
* `TypeError`: thrown if this method is invoked on an object that is not a `Number`.

Complete the `toStringExplanation` function to return the error description as a result when an error occurs:
* For `RangeError`: `"Radix is less than 2 or greater than 36"`.
* For `TypeError`: `"Method is invoked on an object that is not a Number"`.
