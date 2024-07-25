## Introduction to functions

Often we need to perform the same operation several times. And it is very handy when this operation can be easily called at any point in our program the way we use the `console.log()` _function_ to display messages on the screen.

This is usually how programs are structured. They are divided into logical "blocks", which are then used where necessary. The main such "blocks" are _functions_.

Let's try to create our own function:
```js
function hello() {
    console.log("Hello!");
}
```

Such a creation is called a _function declaration_ or a _function statement_.

It consists of



* `function` keyword.
* Function name: `hello`.
* A list of _parameters_ in parentheses. There may be no parameters as in the example.
* _Function body_ in curly brackets. In this case it is one instruction to print to the screen.

To call a function, we just need to specify its name. And since our function has no parameters yet, just empty brackets after it. After calling the function, the instructions from its body will be executed.
```js
hello()  // Will print "Hello!"
```

You can read more about functions [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions).


### Task

Declare a function named `welcome`, which should display a message `"Welcome to the JavaScript course!"` when called.
