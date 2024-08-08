## Introduction to functions

Often, we need to perform the same operation multiple times. It is very handy when this operation can be easily called at any point in our program, just as we use the `console.log()` _function_ to display messages on the screen.

This is typically how programs are structured: they are divided into logical "blocks" that are used as needed. The main type of these "blocks" is _functions_.

Let's try creating our own function:
```js
function hello() {
    console.log("Hello!");
}
```

This process is known as a _function declaration_ or a _function statement_.

It consists of:

* The `function` keyword.
* A function name, such as `hello`.
* A list of _parameters_ in parentheses (there may be no parameters, as in the example).
* The _function body_ enclosed in curly brackets, which in this case contains a single instruction to print to the screen.

To call a function, simply specify its name followed by parentheses. Since our function currently has no parameters, use empty parentheses. When you call the function, the instructions within its body will be executed.
```js
hello()  // Will print "Hello!"
```

You can read more about functions [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions).


### Task

Declare a function named `welcome` that displays the message `"Welcome to the JavaScript course!"` when called.
