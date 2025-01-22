It might seem trivial to have a line where we assign the value `"Tom"` to the variable `name`.
```js
let name = "Tom";
```

Actually, in JavaScript, a function can also be a value and can be assigned to a variable:
```js
let hello = function () {
    console.log("Hello!");
}

hello();  // prints "Hello!"
```

This is another way of creating a function, called a _Function Expression_. It allows you to define a function within an expression.

The main difference between a _function expression_ and a _function declaration_ is the function name, which can be omitted in _function expressions_ to create _anonymous_ functions.
A more detailed explanation is beyond the scope of this course for now, so you can read more about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions).


### Task

Since the value in an assignment can be a function, you can use this feature in further assignments as well.

Declare the `summarizer` variable and assign it the value of the `add` variable.
