Since errors can be of different types, we may need to respond to them in different ways.
To achieve this, we can use the [already known `instanceof` operator](course://Classes/class_checking_instanceof) to check if an object belongs to a specific class.
For clarity, we're printing the error object's `name` attribute, which contains the error type.

Besides, in this example, you may encounter the `finally` block.
This block will always be executed, regardless of whether an exception occurs in the `try` block. 
This block is optional and can be omitted, as we did in the previous tasks.
It is often used to close a file the program was working with, as it is guaranteed to execute in any case.

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

In the example above, we call the previously defined `intArraySum` function with different arguments:
1. The first time, we pass a valid array.
2. The second time, we pass `null` as an argument, causing JavaScript to automatically generate a `TypeError` exception. We handle this with a separate condition in the `catch` block, which prints the `"TypeError occurred"` message.
3. The third time, the array contains a non-number element, and the `intArraySum` function generates an exception of type `Error`.

The instruction in the `finally` block is executed each time.

You can read more about using `instanceof` when processing errors [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#conditional_catch_blocks).

### Task
Imagine you want to write an example to demonstrate how the [Number.toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) function works. 
From the documentation, you have learned that it can generate two types of errors:
* `RangeError`: Thrown if the `radix` is less than 2 or greater than 36.
* `TypeError`: Thrown if the method is invoked on an object that is not a `Number`.

Complete the `toStringExplanation` function so that it returns the appropriate error description when an error occurs:
* For `RangeError`: `"Radix is less than 2 or greater than 36"`.
* For `TypeError`: `"Method is invoked on an object that is not a Number"`.
