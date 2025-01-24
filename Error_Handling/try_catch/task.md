In the previous task, we added a check whether the object has fields, but we didn't add a check, 
for example, whether a function parameter is `null` and maybe some other cases. 
Adding a large number of checks to our program not only increases the programming time, but also makes the code less readable. 
Fortunately, JavaScript has a more convenient mechanism for handling errors: _exceptions_.

When a critical error occurs, program execution is immediately stops, and we see the printed error information. 
For example, if we try to use `null` instead of a reference to the object:

```js
let wrongReference = null;
wrongReference.test = 10;
```

When we execute the program, we get the output like this:
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

In the `try` block we need to place those instructions that may raise exceptions. 
When the error occurs, the execution of the remaining instructions in the `try` block is stopped and the `catch` block is started, 
the task of which is to handle the error. 
The `catch` block may accept as an argument an object containing information about the error. 
After the `catch` block is executed, the program will continue executing the instructions following `try..catch`.


The great advantage of using the `try..catch` block is that it allows you to separate the program logic and error handling and make the program easier to read.

You can read more about error handling using `try..catch` [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch).

### Task
Imagine that you are writing a program to display flight information at the airport. 
You have almost completed the `flightBoardPresenter` function, which takes as a parameter the array of the `Flight` class objects. 
Using the `getDeparture` and `getDestination` methods, you are getting the codes of the departure and arrival airports.

The `flightBoardPresenter` function is crucial for airport operation, and you want to ensure that it works even if 
for some reason there are objects in the `elements` array that do not have `getDeparture` and `getDestination` methods.
Unfortunately, right now program execution will terminate and no flights will be printed.

Put the line <code>result += &#96;${e.getDeparture()} - ${e.getDestination()}\n&#96;</code> in a `try` block 
and if an exception occurs, add the string `"--- - ---\n"` to the result to get the expected result of the program.

<div class="hint">

  The <code class="language-text">\n</code> character combination means that a line break must be printed. 
  For example, the result of outputting such a string <code>console.log("abc\ndef\nghi");</code> will be:
  ```text
  abc
  def
  ghi
  ```  
</div>
