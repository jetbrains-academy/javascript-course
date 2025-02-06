In the previous task, we added a check to determine whether an object contains certain fields, but we didn’t account for cases where,
for example, a function parameter is `null` or other similar issues.
Adding numerous checks to a program not only increases development time but also makes the code less readable. 
Fortunately, JavaScript has a more convenient mechanism for handling errors: _exceptions_.

When a critical error occurs, program execution stops immediately, and error information is displayed.
For example, if we try to use `null` instead of a reference to an object:

```js
let wrongReference = null;
wrongReference.test = 10;
```

Running this program produces output like this:
```text
/usr/local/bin/node task.js
task.js:2
wrongReference.test = 10
                    ^
TypeError: Cannot set properties of null (setting 'test')
    at Object.<anonymous> (task.js:2:21)
    at Module._compile (node:internal/modules/cjs/loader:1368:14)
    ...
```

Thus, we can say that an _exception_ occurred while executing the assignment instruction. 
Of course, we usually do not need to terminate the program when an error occurs, 
so the programmer can explicitly specify how they want to handle errors using the `try...catch` block:

```js
try{
    let wrongReference = null;
    wrongReference.test = 10;
    console.log("It won't be printed");
} catch (e) {
    console.log(e.message);  // Prints "Cannot set properties of null (setting 'test')"
}
console.log("Done");  // Done
```

In the `try` block, we place instructions that might raise exceptions.
When an error occurs, the execution of the remaining instructions in the `try` block is stopped, and the `catch` block is executed, 
the task of which is to handle the error.
The `catch` block may accept an object as an argument containing information about the error.
Once the `catch` block is executed, the program continues running the instructions that follow the `try..catch` construct.


The key advantage of using the `try..catch` block is that it separates program logic from error handling, making the code easier to read.

You can read more about error handling using `try..catch` [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch).

### Task
Imagine that you are writing a program to display flight information at the airport.
You have almost completed the `flightBoardPresenter` function, which takes an array of `Flight` class objects as a parameter. 
Using the `getDeparture` and `getDestination` methods, you are getting the codes of the departure and arrival airports.

The `flightBoardPresenter` function is critical for airport operations, and you want to ensure that it continues to work even if,
for some reason,  the `elements` array contains objects that do not have the `getDeparture` and `getDestination` methods.
Currently, the program will terminate, and no flights will be displayed if such an issue occurs.

Place the line <code>result += &#96;${e.getDeparture()} - ${e.getDestination()}\n&#96;;</code> inside a `try` block.
If an exception occurs, add the string `"--- - ---\n"` to the result to ensure the program produces the expected output.

<div class="hint" title="New line character">

  The <code class="language-text">\n</code> character combination represents a line break.
  For example, the output of the code <code>console.log("abc\ndef\nghi");</code> will be:
  ```text
  abc
  def
  ghi
  ```  
</div>
